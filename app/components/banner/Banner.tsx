'use clinet';

import BannerLink from './BannerLink';
import Carousel from './Carousel';
const Banner = () => {
  return (
    <div className='w-full'>
      <Carousel />
      <BannerLink />
    </div>
  );
};

export default Banner;
