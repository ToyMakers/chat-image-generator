import { create } from "zustand";

export const useChatBackgroundStore = create((set) => ({
  isChangeBackgroundColor: false,
  //채팅방 배경 스타일
  backgroundColor: "",
  backgroundPadding: "",
  backgroundMargin: "",

  setChatBackgroundContainer: (isChangeBackgroundColor) =>
    set(() => ({
      isChangeBackgroundColor,
    })),
  setBackgroundColor: (backgroundColor) => set(() => ({ backgroundColor })),
  setBackgroundPadding: (backgroundPadding) =>
    set(() => ({ backgroundPadding })),
  setBackgroundMargin: (backgroundMargin) => set(() => ({ backgroundMargin })),
}));
