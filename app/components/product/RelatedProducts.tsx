import RelatedProductItem from './RelatedProductItem';
import { Product } from '@/app/data/products';

const RelatedProducts: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='uppercase font-bold'>related products</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {products.map((product) => (
          <RelatedProductItem key={product.slug} slug={product.slug} category={product.category} image={product.image} name={product.name} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
