import { create } from "zustand";

export const useComponentStore = create((set) => ({
  container: "",
  ismodalOpen: false,

  setContainer: (container) =>
    set(() => ({
      container: container,
    })),
  setIsModalOpen: (ismodalOpen) =>
    set(() => ({
      ismodalOpen: ismodalOpen,
    })),
}));
