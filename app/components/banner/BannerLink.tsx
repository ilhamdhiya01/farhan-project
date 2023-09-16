import { FaShoppingCart } from 'react-icons/fa';

const images = [
  {
    imageUrl: 'https://source.unsplash.com/random/400x250',
    imageTitle: 'BAKERY EQUIPMENT',
    imageAlt: 'image 1',
  },
  {
    imageUrl: 'https://source.unsplash.com/random/400x250',
    imageTitle: 'COOKING EQUIPMENT',
    imageAlt: 'image 2',
  },
  {
    imageUrl: 'https://source.unsplash.com/random/400x250',
    imageTitle: 'BEVERAGE EQUIPMENT',
    imageAlt: 'image 3',
  },
];

const BannerLink = () => {
  return (
    <div className='grid grid-cols-1 divide-y'>
      {images.map((image) => (
        <div className='w-[400px] h-[250px] relative bg-cover bg-white overflow-hidden group' style={{ backgroundImage: `url(${image.imageUrl})` }}>
          <div className='absolute w-full top-0 left-0 bottom-0 right-0 flex flex-col gap-2 justify-center items-center bg-neutral-800/70 translate-y-[250px] transition-all duration-300 group-hover:translate-y-0'>
            <div className='text-sm text-white font-bold drop-shadow-lg shadow-black'>{image.imageTitle}</div>
            <button className='text-white hover:bg-yellow-600 bg-yellow-500 text-xs transition duration-200 ease-in-out font-bold px-4 py-2 rounded-md flex items-center gap-1'>
              SHOP NOW
              <FaShoppingCart size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerLink;
