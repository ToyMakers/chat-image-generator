import { create } from "zustand";

export const useStore = create((set) => ({
  chatList: [],
  chatId: 0,
  user: "",
  content: "",
  time: "",

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

  setChatList: (newList) =>
    set((state) => ({
      chatList: newList,
      chatId: state.chatId + 1, // chatList 업데이트 후 chatId 증가
    })),
  setChat: (user, content, time) => set({ user, content, time }),
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
