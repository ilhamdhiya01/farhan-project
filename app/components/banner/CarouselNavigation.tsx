'use client';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const CarouselNavigation: React.FC<{ index: number; isEnd: boolean }> = ({ index, isEnd }) => {
  return (
    <div className={`w-full hidden md:flex justify-between items-center absolute top md:top-[40%] lg:top-[45%]  px-5 z-10`}>
      <div className={`w-[38px] h-[38px] border-2 transition duration-200 ${index === 0 ? 'text-white/20 border-white/20 cursor-not-allowed' : 'border-white/70 text-white/70 cursor-pointer'} rounded-full flex justify-center items-center swiper-button-next`}>
        <BsChevronLeft size={20} className='stroke-1' />
      </div>
      <div className={`w-[38px] h-[38px] border-2 transition duration-200 ${isEnd ? 'text-white/20 border-white/20 cursor-not-allowed' : 'text-white/70 border-white/70 cursor-pointer'} rounded-full flex justify-center items-center swiper-button-prev`}>
        <BsChevronRight size={20} className='stroke-1' />
      </div>
    </div>
  );
};

export default CarouselNavigation;
