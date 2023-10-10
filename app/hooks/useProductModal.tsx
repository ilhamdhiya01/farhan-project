import { create } from 'zustand';

type Product = {
  image: string;
  name: string;
  category: string;
};

type ProdutModalState = {
  isOpen: boolean;
  product: Product;
};

type ProductModalAction = {
  onOpen: () => void;
  onClose: () => void;
  onProductDetail: (data: Product) => void;
};

type ProdutModalStore = ProdutModalState & ProductModalAction;

const initialValue: ProdutModalState = {
  isOpen: false,
  product: {
    name: '',
    image: '',
    category: '',
  },
};

export const useProductModal = create<ProdutModalStore>((set) => ({
  ...initialValue,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onProductDetail: (data) => set({ product: data }),
}));
