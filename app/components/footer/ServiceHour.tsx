'use client';

import FooterLabel from './FooterLabel';
import SocialMedia from './SocialMedia';

const ServiceHour = () => {
  return (
    <div className='text-white'>
      <FooterLabel label='service hour' />
      <div className='flex flex-col gap-1'>
        <span>Senin - Jumat : 09.00 - 19.00 WIB</span>
        <span>Sabtu : 09.00 - 15.00 WIB</span>
      </div>
      <SocialMedia />
    </div>
  );
};

export default ServiceHour;
