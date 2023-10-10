import Image from 'next/image';

type SuperiorityItemProps = {
  image: string;
  title: string;
  description: string;
};

const SuperiorityItem: React.FC<SuperiorityItemProps> = ({ description, image, title }) => {
  return (
    <div className='bg-white overflow-hidden w-full'>
      <div className=''>
        <Image src={image} alt={title} width={100} height={100} className='object-cover w-full h-full' />
      </div>
      <div className='text-center p-2 bg-neutral-800/80 h-full'>
        <div className='text-xs font-bold text-yellow-400 uppercase'>{title}</div>
        <p className='text-xs text-white'>{description}</p>
      </div>
    </div>
  );
};

export default SuperiorityItem;
