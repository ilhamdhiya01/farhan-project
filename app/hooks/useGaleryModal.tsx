import { create } from 'zustand';

type GaleryModalState = {
  isOpen: boolean;
  galery: string;
};

type GaleryModalAction = {
  onOpen: () => void;
  onClose: () => void;
  setImage: (data: string) => void;
};

type GaleryModalStore = GaleryModalState & GaleryModalAction;

const initialValue: GaleryModalState = {
  isOpen: false,
  galery: '',
};

export const useGaleryModal = create<GaleryModalStore>((set) => ({
  ...initialValue,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setImage: (data) => set({ galery: data }),
}));
