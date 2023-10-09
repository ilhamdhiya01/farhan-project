'use client';

import Image from 'next/image';
import Modal from './Modal';
import { useGaleryModal } from '@/app/hooks/useGaleryModal';
import { products } from '@/app/data/products';
import { useCallback } from 'react';

const GaleryOverviewModal = () => {
  const { isOpen, onClose, imageIndex, setImageIndex } = useGaleryModal();
  const image = products.find((item, index) => index === imageIndex)?.image;

  const ImageItem = <Image onClick={(e) => e.stopPropagation()} src={image} alt='Image Item' width={1000} height={1000} className='w-full hfull max-w-xl max-h-[576px] object-cover' />;
  return <Modal modalType='galery' isOpen={isOpen} closeButton={isOpen} navigation={isOpen} content={ImageItem} onClose={onClose} />;
};

export default GaleryOverviewModal;
