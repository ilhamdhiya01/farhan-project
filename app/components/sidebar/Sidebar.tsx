'use client';

import { useSidebar } from '@/app/hooks/useSidebar';
import { useEffect } from 'react';
import MenuItem from './MenuItem';

const Sidebar = () => {
  const { isOpen, onClose } = useSidebar();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <>
      <div
        onClick={onClose}
        className={`
          fixed
          justify-center
          items-center
          overflow-x-hidden
          overflow-y-auto
          bg-neutral-800/70
          z-20
          top-0
          inset-0
          transition
          duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div
          className='
          relative
          w-full
          h-full
          mx-auto
        '
        >
          <div
            className={`
            ease-in-out
            transition-transform 
            transform
            duration-300
            h-full
            w-64
            ${isOpen ? 'translate-x-0' : '-translate-x-64'}
            `}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className='
              h-full
              w-full
              relative
              bg-black
              text-white
              overflow-y-auto
            '
            >
              <MenuItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
