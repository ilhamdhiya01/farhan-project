'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Product = {
  image: string;
  name: string;
  category: string;
  slug: string;
};
const ProductItem: React.FC<Product> = ({ image, name, category, slug }) => {
  const pathName = usePathname();
  return (
    <Link href={`/product/${slug}`}>
      {pathName === '/product' ? (
        <div className='group overflow-hidden bg-white md:h-[265px]'>
          <div className='h-32 md:h-[185px] overflow-hidden relative'>
            <Image src={image} alt={name} width={100} height={100} className='object-cover transition  w-full h-full' />
            <div className='absolute bottom-0 w-full bg-[#D1D109] uppercase text-white text-center text-sm font-bold translate-y-10 transition-all duration-300 py-2 group-hover:translate-y-0'>quick view</div>
          </div>
          <div className='py-2 flex flex-col gap-1'>
            <h2 className='text-[10px] uppercase md:text-xs'>{category}</h2>
            <p className='text-sm uppercase text-blue-600'>{name}</p>
          </div>
        </div>
      ) : (
        <div className='group overflow-hidden bg-white md:h-[265px]'>
          <div className='h-32 md:h-[185px] overflow-hidden'>
            <Image src={image} alt={name} width={100} height={100} className='object-cover transition scale-100 duration-300 group-hover:scale-110  w-full h-full' />
          </div>
          <div className='py-2 flex flex-col gap-1'>
            <h2 className='text-[10px] uppercase md:text-xs'>{category}</h2>
            <p className='text-sm uppercase text-blue-600'>{name}</p>
          </div>
        </div>
      )}
    </Link>
  );
};

export default ProductItem;
