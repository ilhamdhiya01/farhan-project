'use client';

import { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import Container from '../Container';
import Logo from './Logo';
import { useSidebar } from '@/app/hooks/useSidebar';
import MenuItem from '../sidebar/MenuItem';

const Navbar = () => {
  const { onOpen } = useSidebar();
  const [scrolled, setScroled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 160) setScroled(true);
    if (window.scrollY == 0) setScroled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const ContentNav = () => {
    return (
      <Container>
        <div className='flex flex-row justify-between items-center'>
          <AiOutlineMenu onClick={onOpen} size={20} className='xl:hidden' />
          <Logo />
          <div className='hidden xl:flex justify-end w-full px-4'>
            <MenuItem />
          </div>
          <BiSearch size={20} />
        </div>
      </Container>
    );
  };

  return (
    <>
      <nav className={`w-full shadow-sm  bg-white`}>
        <div className={`border-b py-5 ${scrolled ? 'invisible' : 'visible'}`}>
          <ContentNav />
        </div>
      </nav>
      <nav className={`w-full shadow-sm fixed bg-white/90 z-10 top-0 transition-transform transform duration-700 ${scrolled ? 'translate-y-0' : '-translate-y-full invisible'}`}>
        <div className='border-b py-5'>
          <ContentNav />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
