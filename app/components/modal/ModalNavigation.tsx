import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ModalNavigation = () => {
  return (
    <div className='absolute -z-[1] flex justify-between w-full'>
      <FiChevronLeft onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()} className='text-white/70 text-6xl cursor-pointer' />
      <FiChevronRight onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()} className='text-white/70 text-6xl cursor-pointer' />
    </div>
  );
};

export default ModalNavigation;
