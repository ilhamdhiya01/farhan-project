import Image from 'next/image';
import Link from 'next/link';

type RelatedProductItemProps = {
  category: string;
  slug: string;
  name: string;
  image: string;
};
const RelatedProductItem: React.FC<RelatedProductItemProps> = ({ category, image, name, slug }) => {
  return (
    <Link href={`/product/${slug}`}>
      <div className='group overflow-hidden bg-white md:h-[265px]'>
        <div className='h-32 md:h-[185px] overflow-hidden'>
          <Image src={image} alt={name} width={500} height={500} className='object-cover transition scale-100 duration-300 group-hover:scale-110  w-full h-full' />
        </div>
        <div className='p-2 flex flex-col gap-1'>
          <h2 className='text-[10px] uppercase md:text-xs'>{category}</h2>
          <p className='text-sm uppercase text-blue-600'>{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default RelatedProductItem;
