'use client';

import AboutUs from './AboutUs';
import CallCenter from './CallCenter';
import ServiceHour from './ServiceHour';

const Information = () => {
  return (
    <div className='py-6 md:py-0'>
      <AboutUs />
      <CallCenter />
      <ServiceHour />
    </div>
  );
};

export default Information;
