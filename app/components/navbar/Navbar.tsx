'use client';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import Container from '../Container';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className='w-full bg-white shadow-sm'>
      <div className='border-b py-5 px-4'>
        <Container>
          <div className='flex flex-row justify-between items-center'>
            <AiOutlineMenu size={20} />
            <Logo />
            <BiSearch size={20} />
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
