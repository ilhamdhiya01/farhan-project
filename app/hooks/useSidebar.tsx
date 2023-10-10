import { create } from 'zustand';

type SidebarState = {
  isOpen: boolean;
};

type SidebarAction = {
  onOpen: () => void;
  onClose: () => void;
};

type SidebarStore = SidebarState & SidebarAction;

const initialValue: SidebarState = {
  isOpen: false,
};

export const useSidebar = create<SidebarStore>((set) => ({
  ...initialValue,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
