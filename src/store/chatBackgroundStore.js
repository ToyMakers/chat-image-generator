import { create } from "zustand";

export const useStore = create((set) => ({
  //채팅방 배경 스타일
  backgroundColor: "",
  backgroundPadding: "",
  backgroundMargin: "",

  addChatBackground: (backgroundColor, backgroundPadding, backgroundMargin) =>
    set(() => ({
      backgroundColor,
      backgroundPadding,
      backgroundMargin,
    })),
}));
