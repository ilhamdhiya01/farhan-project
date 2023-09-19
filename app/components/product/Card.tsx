'use client';

import Image from 'next/image';
type Product = {
  image: string;
  name: string;
  total: number;
};
const Card: React.FC<Product> = ({ image, name, total }) => {
  return (
    <div className='shadow-xl border rounded-md group overflow-hidden'>
      <div className='h-32 overflow-hidden'>
        <Image src={image} alt={name} width={100} height={100} className='object-cover transition scale-100 duration-300 group-hover:scale-110  w-full h-full' />
      </div>
      <div className='p-3'>
        <h2 className='text-sm uppercase font-semibold'>{name}</h2>
        <p className='text-xs uppercase group-hover:text-blue-600 transition duration-200'>{total} products</p>
      </div>
    </div>
  );
};

export default Card;
