'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menus = [
  {
    name: 'Beranda',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Product',
    link: '/product',
  },
  {
    name: 'Galery',
    link: '/galery',
  },
];

const MenuItem = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <ul className='hidden xl:flex items-center gap-4'>
        {menus.map((menu, index) => (
          <Link key={index} href={menu.link}>
            <li className={`uppercase  text-[13px] cursor-pointer  hover:text-[#121212d9] transition duration-300 ${pathname === menu.link || pathname.includes(menu.name.toLowerCase()) ? 'text-[#121212d9] font-bold' : 'text-[#666666D9]'}`}>{menu.name}</li>
          </Link>
        ))}
      </ul>
      <ul className='xl:hidden'>
        {menus.map((menu, index) => (
          <Link key={index} href={menu.link} className='block'>
            <li className='py-4 px-5 uppercase font-bold text-white border-b border-neutral-700 text-xs hover:bg-neutral-500 cursor-pointer transition duration-200'>{menu.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default MenuItem;
