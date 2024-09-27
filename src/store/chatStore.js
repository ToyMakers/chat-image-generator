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
  timeFontSize: "",
  timeTextColor: "",

  setChatList: (user, content, time) =>
    set((state) => {
      const newChatId = state.chatId + 1;
      return {
        chatList: [
          ...state.chatList,
          {
            chatId: newChatId,
            user,
            content,
            time,
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
  addChatStyle: (
    chatTextColor,
    chatBorderRadius,
    chatFontWeight,
    chatFontSize,
    chatPadding,
    chatWidth
  ) =>
    set(() => ({
      chatTextColor,
      chatBorderRadius,
      chatFontWeight,
      chatFontSize,
      chatPadding,
      chatWidth,
    })),
  addChatTimeStyle: (timeFontSize, timeTextColor) =>
    set(() => ({
      timeFontSize,
      timeTextColor,
    })),
}));
