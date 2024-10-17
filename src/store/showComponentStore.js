import { create } from "zustand";

export const useComponentStore = create((set) => ({
  container: "",
  isAddModalOpen: false,
  isEditModalOpen: false,
  setContainer: (container) =>
    set(() => ({
      container: container,
    })),
  setIsAddModalOpen: (isAddModalOpen) =>
    set(() => ({
      isAddModalOpen: isAddModalOpen,
    })),
  setIsEditModalOpen: (isEditModalOpen) =>
    set(() => ({
      isEditModalOpen: isEditModalOpen,
    })),
}));
