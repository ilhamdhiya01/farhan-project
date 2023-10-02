'use client';

import Banner from './components/banner/Banner';
import Container from './components/Container';
import ProductItem from './components/product/ProductItem';
import SectionLabel from './components/SectionLabel';
import { products } from './data/products';

export default function Home() {
  return (
    <>
      <Banner />
      <Container>
        <div className='py-6'>
          <SectionLabel title='our product' afterWidth={'after:w-[28%] md:after:w-[35%] xl:after:w-[39%]'} beforeWidth={'before:w-[28%] md:before:w-[35%] xl:before:w-[39%]'} />
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 transition-all duration-500 ease-in-out gap-4 md:gap-6'>
            {products.map((product) => (
              <ProductItem key={product.slug} slug={product.slug} image={product.image} name={product.name} category={product.category} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
