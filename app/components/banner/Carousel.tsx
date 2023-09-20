'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import CarouselNavigation from './CarouselNavigation';

const images = [
  {
    imageUrl: 'https://source.unsplash.com/random/800x800',
    imageAlt: 'image 1',
  },
  {
    imageUrl: 'https://source.unsplash.com/random/800x800',
    imageAlt: 'image 2',
  },
  {
    imageUrl: 'https://source.unsplash.com/random/800x800',
    imageAlt: 'image 3',
  },
  {
    imageUrl: 'https://source.unsplash.com/random/800x800',
    imageAlt: 'image 4',
  },
  {
    imageUrl: 'https://source.unsplash.com/random/800x800',
    imageAlt: 'image 5',
  },
];

const Carousel = () => {
  const [state, setState] = useState({
    activeIndex: 0,
    isEnd: false,
  });
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };
  const handleNavigation = (index: number, isEnd: boolean) => {
    setState((prev) => ({
      ...prev,
      activeIndex: index,
      isEnd: isEnd,
    }));
  };
  return (
    <div className='w-full overflow-hidden md:h-[235px] relative'>
      <CarouselNavigation isEnd={state.isEnd} index={state.activeIndex} />
      <Swiper
        navigation={{
          enabled: true,
          nextEl: '.swiper-button-prev',
          prevEl: '.swiper-button-next',
        }}
        pagination={pagination}
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(swiper) => handleNavigation(swiper.activeIndex, swiper.isEnd)}
        // onSwiper={(swiper) => console.log(swiper.isEnd)}
        className='w-full h-full'
      >
        {images.map((image) => (
          <SwiperSlide key={image.imageAlt}>
            <Image key={image.imageAlt} src={image.imageUrl} alt={image.imageAlt} width={100} height={100} className='w-full  object-cover' />
          </SwiperSlide>
        ))}
      </Swiper>
      <div></div>
    </div>
  );
};

export default Carousel;
