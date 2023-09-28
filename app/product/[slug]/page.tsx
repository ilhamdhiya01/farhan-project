import ProductDetails from '@/app/components/product/ProductDetails';
import { products } from '@/app/data/products';
import { Metadata } from 'next';

const page: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const { slug } = params;
  const product = products.find((item) => item.slug === slug);
  return (
    <>
      <ProductDetails product={product} />
    </>
  );
};

export default page;
