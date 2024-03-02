'use client';
import Container from '../Container';
import Information from './Information';
import Location from './Location';
import Payment from './Payment';
import Superiority from './Superiority';

const Footer = () => {
  return (
    <footer className='bg-black'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-4 xl:gap-7 md:pt-6'>
          <div className='md:pb-6'>
            <Information />
          </div>
          <div className='md:order-3 xl:order-2 md:col-span-2 xl:col-span-1 xl:border-r xl:border-neutral-700/90 xl:pr-7'>
            <Superiority />
          </div>
          <div className='md:order-2 xl:order-3'>
            <Payment />
            <Location />
          </div>
        </div>
      </Container>
      <div>
        <div className='uppercase text-center py-4 bg-gray-600 font-semibold text-gray-400 text-sm'>2023 | CV. Cahya Vinture Indonesia mesin</div>
      </div>
    </footer>
  );
};

export default Footer;
