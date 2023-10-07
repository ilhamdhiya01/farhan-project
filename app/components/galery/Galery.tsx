'use client';

import { products } from '@/app/data/products';
import { useState, useEffect } from 'react';
import ImageGaleryItem from './ImageGaleryItem';

const Galery = () => {
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    const productImages = products.map((product) => product.image);
    setImages(productImages);
  }, []);

  return (
    <div className='grid grid-cols-2 md:grid-cols-3  gap-2 md:gap-3'>
      {images.map((image, index) => (
        <ImageGaleryItem key={index} image={image} />
      ))}
    </div>
  );
};

export default Galery;
