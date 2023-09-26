import Container from '../components/Container';
import ProductItem from '../components/product/ProductItem';
import { products } from '../data/products';

const page = () => {
  return (
    <>
      <Container>
        <div className='py-10'>
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 transition-all duration-500 ease-in-out gap-4 md:gap-6'>
            {products.map((product) => (
              <ProductItem key={product.slug} slug={product.slug} image={product.image} name={product.name} total={product.stock} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default page;
