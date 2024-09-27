import { create } from "zustand";

export const useComponentStore = create((set) => ({
  container: "",

  setContainer: (container) =>
    set(() => ({
      container: container,
    })),
}));
