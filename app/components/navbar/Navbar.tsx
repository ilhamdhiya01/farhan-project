'use client';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className='w-full bg-white shadow-sm'>
      <div className='border-b py-4 px-4'>
        <AiOutlineMenu />
        <BiSearch size={18} />
      </div>
    </nav>
  );
};

export default Navbar;
