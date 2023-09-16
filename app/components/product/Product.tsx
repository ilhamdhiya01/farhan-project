import Card from './Card';

const products = [
  {
    image: '/images/image1.jpg',
    name: 'Bakery Equipment',
    total: 125,
  },
  {
    image: '/images/image2.jpg',
    name: 'Bar & Hotel Equipment',
    total: 125,
  },
  {
    image: '/images/image3.jpg',
    name: 'Packageing Equipment',
    total: 125,
  },
  {
    image: '/images/image4.jpg',
    name: 'Cooking Equipment',
    total: 125,
  },
  {
    image: '/images/image5.jpg',
    name: 'Meetp Processing Equipment',
    total: 125,
  },
];

const Product = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {products.map((product) => (
        <Card key={product.name} {...product} />
      ))}
    </div>
  );
};

export default Product;
