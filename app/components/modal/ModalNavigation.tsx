'use client';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useGaleryModal } from '@/app/hooks/useGaleryModal';
import { products } from '@/app/data/products';
import { useCallback } from 'react';

const ModalNavigation: React.FC<{ navType?: string }> = ({ navType }) => {
  const { imageIndex, setImageIndex } = useGaleryModal();

  const handleNextImage = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      const maxIndex = products.length - 1;
      if (imageIndex === maxIndex) {
        setImageIndex(maxIndex);
      } else {
        setImageIndex(imageIndex + 1);
      }
    },
    [imageIndex, setImageIndex]
  );
  const handlePrevImage = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      if (imageIndex === 0) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex - 1);
      }
    },
    [imageIndex, setImageIndex]
  );

  return (
    <div className='absolute -z-[1] flex justify-between w-full'>
      {navType === 'galery' ? (
        <>
          <FiChevronLeft onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handlePrevImage(e)} className='text-white/70 text-6xl cursor-pointer' />
          <FiChevronRight onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleNextImage(e)} className='text-white/70 text-6xl cursor-pointer' />
        </>
      ) : null}
    </div>
  );
};

export default ModalNavigation;
