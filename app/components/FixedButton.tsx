'use client';

import { BsWhatsapp } from 'react-icons/bs';

const FixedButton = () => {
  return (
    <div className='flex md:justify-end fixed bottom-2 md:bottom-5 w-full px-4 z-10'>
      <div className='flex items-center md:w-[260px] bg-green-600 text-white shadow-xl w-full  rounded-full overflow-hidden'>
        {/* <div className='py-2 px-4 basis-[85%] text-center text-sm'>Konsultasikan Kebutuhan Anda Disini</div> */}
        <div className='py-2 md:py-3 px-4 md:px-5 basis-[85%] text-center text-sm'>Konsultasikan Kebutuhan...</div>
        <div className='basis-[15%] flex py-2 justify-center items-center bg-green-700 h-full'>
          <BsWhatsapp size={25} />
        </div>
      </div>
    </div>
  );
};

export default FixedButton;
