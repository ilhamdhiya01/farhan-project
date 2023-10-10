'use client';

import { useProductModal } from '@/app/hooks/useProductModal';
import Image from 'next/image';
import Modal from './Modal';

const QuickViewModal: React.FC<{}> = () => {
  const { isOpen, onClose, product } = useProductModal();
  const Content = (
    <div onClick={(e) => e.stopPropagation()} className='border-0 shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none p-5'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5'>
        <div className='w-full h-[300px] overflow-hidden'>
          <Image src={product.image} alt='image-detail' width={500} height={500} className='object-cover w-full h-full' />
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl lg:text-3xl font-bold relative after:content-[""] after:block after:w-9 after:h-[3px] after:bg-gray-300 after:rounded-full after:my-2'>{product.name}</h2>
          <div className='uppercase text-xs lg:text-sm border-y py-2'>sku : dz-88</div>
          <div className='text-xs lg:text-sm'>
            Categories : <a className='text-[#1e73be]'>{product.category}</a>
          </div>
        </div>
      </div>
    </div>
  );
  return <Modal content={Content} isOpen={isOpen} onClose={onClose} />;
};

export default QuickViewModal;
