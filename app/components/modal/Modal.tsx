'use client';
import { useEffect } from 'react';
import ModalNavigation from './ModalNavigation';

type ModalProps = {
  content: React.ReactElement;
  isOpen: boolean;
  navigation?: boolean;
  closeButton?: boolean;
  modalType?: string;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ content, isOpen, onClose, navigation, modalType }) => {
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
        box-border
        flex
        justify-center
        items-center
        overflow-x-hidden
        overflow-y-hidden
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-neutral-800/70
        transition
        duration-700
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
      >
        {navigation && <ModalNavigation navType={modalType} />}
        <div
          className='
          relative
          w-[90%]
          lg:w-2/3
          my-6
          mx-auto
          h-full
          lg:h-auto
          md:h-auto
        '
        >
          <div
            className={`
            transition-all
            duration-500
            flex 
            justify-center
            items-center
            h-full 
            py-5
            ${isOpen ? 'translate-y-0' : '-translate-y-full'}
            ${isOpen ? 'opacity-100' : 'opacity-0'}
          `}
          >
            {content}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
