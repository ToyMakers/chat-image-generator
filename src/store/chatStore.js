import { create } from "zustand";

export const useStore = create((set) => ({
  chatList: [],
  chatId: 0,

  // 채팅 스타일
  chatTextColor: "",
  chatBorderRadius: "",
  chatFontWeight: "",
  chatFontSize: "",
  chatPadding: "",
  chatWidth: "",

  //말한 사람 스타일
  senderFontWeight: "",
  senderFontSize: "",
  senderTextColor: "",

  //시간 스타일
  timeTextSize: "",
  timeTextColor: "",

  //프로필 스타일
  profileWidth: 0,
  profileHeigth: 0,
  profileBackgroundColor: "",
  profileBorderThickness: 0,
  profileBorderColor: "",
  profileBorderStyle: "",
  profileBorderRadius: 0,

  setChatList: (user, content, time) =>
    set((state) => {
      const newChatId = state.chatId + 1;
      return {
        chatList: [
          ...state.chatList,
          {
            chatId: newChatId,
            user: "",
            content: "",
            time: "",
          },
        ],
        chatId: newChatId,
      };
    }),
  // 특정 chatId의 채팅을 업데이트하는 함수 추가
  updateChatById: (chatId, updatedUser, updatedContent, updatedTime) =>
    set((state) => ({
      chatList: state.chatList.map((chat) =>
        chat.chatId === chatId
          ? {
              chatId,
              user: updatedUser,
              content: updatedContent,
              time: updatedTime,
            }
          : chat
      ),
    })),
  setChatTextColor: (chatTextColor) =>
    set(() => ({
      chatTextColor,
    })),
  setChatBorderRadius: (chatBorderRadius) =>
    set(() => ({
      chatBorderRadius,
    })),
  setChatFontWeight: (chatFontWeight) =>
    set(() => ({
      chatFontWeight,
    })),
  setChatFontSize: (chatFontSize) =>
    set(() => ({
      chatFontSize,
    })),
  setChatPadding: (chatPadding) =>
    set(() => ({
      chatPadding,
    })),
  setChatWidth: (chatWidth) =>
    set(() => ({
      chatWidth,
    })),
  setTimeTextSize: (timeTextSize) =>
    set(() => ({
      timeTextSize,
    })),
  setTimeTextColor: (timeTextColor) =>
    set(() => ({
      timeTextColor,
    })),
  setSenderFontWeight: (senderFontWeight) =>
    set(() => ({
      senderFontWeight,
    })),
  setSenderFontSize: (senderFontSize) =>
    set(() => ({
      senderFontSize,
    })),
  setSenderFontColor: (senderTextColor) =>
    set(() => ({
      senderTextColor,
    })),
  //프로필 사진 setter
  setProfileWidth: (newWidth) => set({ profileWidth: newWidth }),
  setProfileHeight: (newHeight) => set({ profileHeight: newHeight }),
  setProfileBackgroundColor: (newColor) =>
    set({ profileBackgroundColor: newColor }),
  setProfileBorderThickness: (newThickness) =>
    set({ profileBorderThickness: newThickness }),
  setProfileBorderColor: (newColor) => set({ profileBorderColor: newColor }),
  setProfileBorderStyle: (newStyle) => set({ profileBorderStyle: newStyle }),
  setProfileBorderRadius: (newRadius) =>
    set({ profileBorderRadius: newRadius }),
}));
