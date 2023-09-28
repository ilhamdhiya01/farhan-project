'use clinet';

import Link from 'next/link';
import Container from '../Container';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import { Product } from '@/app/data/products';
import ProductSpecification from './ProductSpecification';

const BreadCrumbs = () => (
  <ul className='flex items-center gap-6'>
    <li className='uppercase font-semibold text-[#666666b2] relative after:content-[""] after:w-[0.5px] after:h-[15px] after:last:w-0 after:last:h-0 after:rotate-[28deg] after:bg-[#222222] after:absolute after:-right-3 after:top-1'>
      <Link href={`/`}>
        <span>home</span>
      </Link>
    </li>
    <li className='uppercase font-semibold text-[#666666b2] relative after:content-[""] after:w-[0.5px] after:h-[15px] after:last:w-0 after:last:h-0 after:rotate-[28deg] after:bg-[#222222] after:absolute after:-right-3 after:top-1'>
      <Link href={`/`}>
        <span>all brands</span>
      </Link>
    </li>
    <li className='uppercase font-semibold text-[#666666b2] relative after:content-[""] after:w-[0.5px] after:h-[15px] after:last:w-0 after:last:h-0 after:rotate-[28deg] after:bg-[#222222] after:absolute after:-right-3 after:top-1'>
      <Link href={`/`}>
        <span>product-1</span>
      </Link>
    </li>
  </ul>
);

const Navigation = () => (
  <div className='flex items-center justify-center gap-2'>
    <div className='w-8 h-8 border-2 border-[#c0c0c0] rounded-full text-[#c0c0c0] flex justify-center items-center'>
      <FiChevronLeft />
    </div>
    <div className='w-8 h-8 border-2 border-[#c0c0c0] rounded-full text-[#c0c0c0] flex justify-center items-center'>
      <FiChevronRight />
    </div>
  </div>
);

type ProductDetailProps = {
  product: Product | undefined;
};

const ProductDetails: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className='w-full'>
      <Container>
        <div className='pt-4 pb-6'>
          <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-2'>
            <BreadCrumbs />
            <Navigation />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 mt-5 pb-5 border-b'>
            <div className='w-full h-[300px] overflow-hidden'>
              <Image src={product?.image} alt='image-detail' width={100} height={100} className='object-cover w-full h-full' />
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-2xl lg:text-3xl font-bold relative after:content-[""] after:block after:w-9 after:h-[3px] after:bg-gray-300 after:rounded-full after:my-2'>{product?.name}</h2>
              <div className='uppercase text-xs lg:text-sm border-y py-2'>sku : dz-88</div>
              <div className='text-xs lg:text-sm'>
                Categories : <a className='text-[#1e73be]'>Bag Binding</a>, <a className='uppercase text-[#1e73be]'>getra</a>
              </div>
            </div>
          </div>
          <div className='mt-0'>
            <div className='flex flex-col gap-5'>
              <h2 className='uppercase font-bold text-xs lg:text-sm relative before:content-[""] before:block before:w-full before:lg:w-[10%] before:h-[3px] before:bg-[#d1d109] before:rounded-full before:mb-3'>description</h2>
              <p>{product?.description}</p>
            </div>
            <div className='mt-5'>
              <h2 className='text-xl lg:text-2xl font-bold'>Spesifikasi :</h2>
              <div className='flex flex-col gap-2 text-sm lg:text-base mt-3'>
                <ProductSpecification spec={product?.specification} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
