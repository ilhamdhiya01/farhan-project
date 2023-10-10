import ProductDetails from '@/app/components/product/ProductDetails';
import { products } from '@/app/data/products';

type MetadataProps = {
  params: { slug: string };
};

export const generateMetadata = ({ params }: MetadataProps): { title?: string } => {
  const slug = params.slug;
  const productTitle = products.find((item) => item.slug === slug)?.name;
  return {
    title: productTitle,
  };
};

const page: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const { slug } = params;
  const product = products.find((item) => item.slug === slug);
  const indexProduct = products.findIndex((item) => item.slug === slug);
  return (
    <>
      <ProductDetails indexProduct={indexProduct} product={product} />
    </>
  );
};

export default page;
