'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

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
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <div>
      <Swiper pagination={pagination} modules={[Pagination]} spaceBetween={0} slidesPerView={1} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
        {images.map((image) => (
          <SwiperSlide key={image.imageAlt}>
            <img src={image.imageUrl} alt={image.imageAlt} key={image.imageAlt} className='w-full  object-cover' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
