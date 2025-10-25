import { DETAILS_DATA } from "@/utils/types";
import { create } from "zustand";

interface DetailStore<T = Record<string, any>> {
  details: T | null | DETAILS_DATA;
  setDetails: (details: T) => void;
  clearDetails: (details: T) => void;
}

export const useDetailsStore = create<DetailStore>((set) => ({
  details: null,
  setDetails: (details) => set({ details }),
  clearDetails: (details) => set({ details: null }),
}));
