'use client';

import Image from 'next/image';
import Modal from './Modal';
import { useGaleryModal } from '@/app/hooks/useGaleryModal';

const GaleryOverviewModal = () => {
  const { isOpen, onClose, galery } = useGaleryModal();

  const ImageItem = <Image src={galery} alt='Image Item' width={1000} height={1000} className='w-full hfull max-w-xl max-h-[576px] object-cover' />;

  return <Modal isOpen={isOpen} closeButton={isOpen} navigation={isOpen} content={ImageItem} onClose={onClose} />;
};

export default GaleryOverviewModal;
