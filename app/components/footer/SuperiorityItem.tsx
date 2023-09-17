interface SuperiorityItemProps {
  image: string;
  title: string;
  description: string;
}

const SuperiorityItem: React.FC<SuperiorityItemProps> = ({ description, image, title }) => {
  return (
    <div className='bg-white overflow-hidden w-full'>
      <div className=''>
        <img src={image} alt={title} className='object-cover w-full h-full' />
      </div>
      <div className='text-center p-2 bg-neutral-800/80 h-full'>
        <div className='text-xs font-bold text-yellow-400 uppercase'>{title}</div>
        <p className='text-xs text-white'>{description}</p>
      </div>
    </div>
  );
};

export default SuperiorityItem;
