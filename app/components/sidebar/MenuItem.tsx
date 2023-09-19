'use client';

import Link from 'next/link';

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
  return (
    <>
      <ul>
        {menus.map((menu) => (
          <Link key={menu.name} href={menu.link} className='block'>
            <li className='py-4 px-5 uppercase font-bold text-white border-b border-neutral-700 text-xs hover:bg-neutral-500 cursor-pointer transition duration-200'>{menu.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default MenuItem;
