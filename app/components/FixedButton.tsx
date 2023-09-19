'use client';

import { BsWhatsapp } from 'react-icons/bs';

const FixedButton = () => {
  return (
    <a href=''>
      <div className='flex items-center z-10 bg-green-600 text-white shadow-xl fixed bottom-2 right-4 left-4 rounded-full overflow-hidden'>
        <div className='py-2 px-4 basis-[85%] text-center text-sm'>Konsultasikan Kebutuhan Anda Disini</div>
        <div className='basis-[15%] flex py-2 justify-center items-center bg-green-700 h-full'>
          <BsWhatsapp size={25} />
        </div>
      </div>
    </a>
  );
};

export default FixedButton;
