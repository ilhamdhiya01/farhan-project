'use client';

import Image from 'next/image';
import { useGaleryModal } from '@/app/hooks/useGaleryModal';
import { useCallback } from 'react';

const ImageGaleryItem: React.FC<{ image: string }> = ({ image }) => {
  const { onOpen, setImage } = useGaleryModal();

  const handleShowImage = useCallback(() => {
    onOpen();
    setImage(image);
  }, [image, onOpen]);

  return (
    <div onClick={handleShowImage} className='overflow-hidden relative rounded-lg cursor-zoom-in'>
      <Image src={image} alt='Galery Item' width={500} height={500} className='w-full h-full object-cover' />
    </div>
  );
};

export default ImageGaleryItem;
