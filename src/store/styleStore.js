import { create } from "zustand";

export const useStyleStore = create((set) => ({
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

  //프로필 사진 스타일
  profileWidth: 0,
  profileHeigth: 0,
  profileBackgroundColor: "",
  profileBorderThickness: 0,
  profileBorderColor: "",
  profileBorderStyle: "",
  profileBorderRadius: 0,

  //채팅방 배경 스타일
  backgroundColor: "",
  backgroundPadding: "",
  backgroundMargin: "",

  // 채팅 스타일 setter
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

  //시간 스타일 setter
  setTimeTextSize: (timeTextSize) =>
    set(() => ({
      timeTextSize,
    })),
  setTimeTextColor: (timeTextColor) =>
    set(() => ({
      timeTextColor,
    })),

  //말한 사람 스타일 setter
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

  //채팅방 배경 setter
  setBackgroundColor: (backgroundColor) => set(() => ({ backgroundColor })),
  setBackgroundPadding: (backgroundPadding) =>
    set(() => ({ backgroundPadding })),
  setBackgroundMargin: (backgroundMargin) => set(() => ({ backgroundMargin })),
}));
