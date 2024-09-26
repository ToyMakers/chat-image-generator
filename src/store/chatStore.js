import { create } from "zustand";

export const useStore = create((set) => ({
  user: "",
  content: "",
  time: "",

  addChat: (user, content, time) =>
    set(() => ({
      user,
      content,
      time,
    })),
}));
