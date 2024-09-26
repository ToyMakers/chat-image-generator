import { create } from "zustand";

export const useProfileStore = create((set) => ({
  width: 0,
  heigth: 0,
  backgroundColor: "",
  borderThickness: 0,
  borderColor: "",
  borderStyle: "",
  borderRadius: 0,

  setWidth: (newWidth) => set({ width: newWidth }),
  setHeight: (newHeight) => set({ height: newHeight }),
  setBackgroundColor: (newColor) => set({ backgroundColor: newColor }),
  setBorderThickness: (newThickness) => set({ borderThickness: newThickness }),
  setBorderColor: (newColor) => set({ borderColor: newColor }),
  setBorderStyle: (newStyle) => set({ borderStyle: newStyle }),
  setBorderRadius: (newRadius) => set({ borderRadius: newRadius }),
}));
