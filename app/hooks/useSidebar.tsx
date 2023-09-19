import { create } from 'zustand';

interface SidebarState {
  isOpen: boolean;
}

interface SidebarAction {
  onOpen: () => void;
  onClose: () => void;
}

interface SidebarStore extends SidebarState, SidebarAction {}

const initialValue: SidebarState = {
  isOpen: false,
};

export const useSidebar = create<SidebarStore>((set) => ({
  ...initialValue,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
