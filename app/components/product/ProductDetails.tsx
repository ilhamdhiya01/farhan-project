'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import Container from '../Container';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import { Product, products } from '@/app/data/products';
import ProductSpecification from './ProductSpecification';
import RelatedProducts from './RelatedProducts';
import { useRouter } from 'next/navigation';

type ProductDetailProps = {
  product: Product | undefined;
  indexProduct: number;
};

type NavigationProps = {
  handleNext: () => void;
  handlePrev: () => void;
  index: number;
};

const BreadCrumbs: React.FC<{ category: string | undefined; slug: string | undefined }> = ({ category, slug }) => (
  <ul className='flex items-center gap-6'>
    <li className='uppercase font-semibold text-[#666666b2] relative after:content-[""] after:w-[0.5px] after:h-[15px] after:last:w-0 after:last:h-0 after:rotate-[28deg] after:bg-[#222222] after:absolute after:-right-3 after:top-1'>
      <Link href={`/`}>
        <span>home</span>
      </Link>
    </li>
    <li className='uppercase font-semibold text-[#666666b2] relative after:content-[""] after:w-[0.5px] after:h-[15px] after:last:w-0 after:last:h-0 after:rotate-[28deg] after:bg-[#222222] after:absolute after:-right-3 after:top-1'>
      <Link href={`/product`}>
        <span>Products</span>
      </Link>
    </li>
    <li className='uppercase font-semibold text-[#666666b2] relative after:content-[""] after:w-[0.5px] after:h-[15px] after:last:w-0 after:last:h-0 after:rotate-[28deg] after:bg-[#222222] after:absolute after:-right-3 after:top-1'>
      <Link href={`/product/${slug}`}>
        <span>{category}</span>
      </Link>
    </li>
  </ul>
);

const Navigation: React.FC<NavigationProps> = ({ handleNext, handlePrev, index }) => (
  <div className='flex items-center justify-center gap-2'>
    <div onClick={handlePrev} className={`${index === 0 ? 'hidden' : 'flex'} w-8 h-8 border-2 border-[#c0c0c0] rounded-full text-[#c0c0c0] justify-center items-center group hover:bg-[#D1D109] hover:border-[#D1D109] transition duration-200 cursor-pointer`}>
      <FiChevronLeft className='group-hover:text-white transition duration-200' />
    </div>
    <div onClick={handleNext} className={`${index === products.length - 1 ? 'hidden' : 'flex'} w-8 h-8 border-2 border-[#c0c0c0] rounded-full text-[#c0c0c0] justify-center items-center group hover:bg-[#D1D109] hover:border-[#D1D109] transition duration-200 cursor-pointer`}>
      <FiChevronRight className='group-hover:text-white transition duration-200' />
    </div>
  </div>
);

const ProductDetails: React.FC<ProductDetailProps> = ({ product, indexProduct }) => {
  const [currentIndexProduct, setCurrentIndexProduct] = useState(indexProduct);
  const [navigationProduct, setNavigationProduct] = useState(product);
  const router = useRouter();
  const relatedProduct = products.filter((item) => item.category === navigationProduct?.category && item.slug !== navigationProduct?.slug);

  useEffect(() => {
    const productIndex = products.find((item, index) => index === currentIndexProduct);
    setNavigationProduct(productIndex);
    router.push(productIndex?.slug as string);
  }, [currentIndexProduct, navigationProduct]);

  const handleNextNavigation = useCallback(() => {
    const maxIndex = products.length - 1;
    if (currentIndexProduct === maxIndex) {
      setCurrentIndexProduct(maxIndex);
    } else {
      setCurrentIndexProduct(currentIndexProduct + 1);
    }
  }, [currentIndexProduct]);

  const handlePrevNavigation = useCallback(() => {
    if (currentIndexProduct === 0) {
      setCurrentIndexProduct(0);
    } else {
      setCurrentIndexProduct(currentIndexProduct - 1);
    }
  }, [currentIndexProduct]);

  return (
    <div className='w-full'>
      <Container>
        <div className='pt-4 pb-6'>
          <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-2'>
            <BreadCrumbs category={navigationProduct?.category} slug={navigationProduct?.slug} />
            <Navigation index={currentIndexProduct} handlePrev={handlePrevNavigation} handleNext={handleNextNavigation} />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 mt-5 pb-5 border-b'>
            <div className='w-full h-[300px] overflow-hidden'>
              <Image src={navigationProduct?.image} alt='image-detail' width={500} height={500} className='object-cover w-full h-full' />
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-2xl lg:text-3xl font-bold relative after:content-[""] after:block after:w-9 after:h-[3px] after:bg-gray-300 after:rounded-full after:my-2'>{navigationProduct?.name}</h2>
              <div className='uppercase text-xs lg:text-sm border-y py-2'>sku : dz-88</div>
              <div className='text-xs lg:text-sm'>
                Categories : <a className='text-[#1e73be]'>{navigationProduct?.category}</a>
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
                <ProductSpecification spec={navigationProduct?.specification} />
              </div>
            </div>
          </div>
          <div className='mt-20 border-t pt-4'>
            <RelatedProducts products={relatedProduct} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
