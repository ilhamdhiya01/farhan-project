import { create } from 'zustand';

type GaleryModalState = {
  isOpen: boolean;
  imageIndex: number;
};

type GaleryModalAction = {
  onOpen: () => void;
  onClose: () => void;
  setImageIndex: (data: number) => void;
};

type GaleryModalStore = GaleryModalState & GaleryModalAction;

const initialValue: GaleryModalState = {
  isOpen: false,
  imageIndex: 0,
};

export const useGaleryModal = create<GaleryModalStore>((set) => ({
  ...initialValue,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setImageIndex: (data) => set({ imageIndex: data }),
}));
