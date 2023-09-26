'use client';

import Image from 'next/image';
import Link from 'next/link';
type Product = {
  image: string;
  name: string;
  total: number;
  slug: string;
};
const ProductItem: React.FC<Product> = ({ image, name, total, slug }) => {
  return (
    <Link href={`/product/${slug}`}>
      <div className='shadow-sm border rounded-sm group overflow-hidden bg-white md:h-[265px]'>
        <div className='h-32 md:h-[185px] overflow-hidden'>
          <Image src={image} alt={name} width={100} height={100} className='object-cover transition scale-100 duration-300 group-hover:scale-110  w-full h-full' />
        </div>
        <div className='p-3 md:text-center'>
          <h2 className='text-sm uppercase font-semibold md:font-bold'>{name}</h2>
          <p className='text-xs uppercase group-hover:text-blue-600 transition duration-200'>{total} products</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
