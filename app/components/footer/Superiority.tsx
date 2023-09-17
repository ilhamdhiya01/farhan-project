import SuperiorityItem from './SuperiorityItem';

const superiority = [
  {
    image: '/images/icon-best-deal-120.jpg',
    title: 'best deal',
    description: 'Dapatkan Penawaran Harga Terbaik',
  },
  {
    image: '/images/icon-setup-120.jpg',
    title: 'free setup',
    description: 'Gratis Instalasi & Traning',
  },
  {
    image: '/images/icon-Free-Refund-120.jpg',
    title: 'free refund',
    description: 'Jika Barang Kami Tidak Original',
  },
  {
    image: '/images/icon-priority-120.gif',
    title: 'priority shipping',
    description: 'Beli Hari Ini, Dikirim Hari Ini',
  },
  {
    image: '/images/icon-Free-Shipping-120.jpg',
    title: 'free shipping',
    description: 'Area Semarang Dalam Radius 15km',
  },
  {
    image: '/images/icon-Customer-Service-120.jpg',
    title: 'customer service',
    description: 'Siap Membantu Anda 24 Jam',
  },
];

const Superiority = () => {
  return (
    <div className='grid grid-cols-3 gap-3 py-6'>
      {superiority.map((item) => (
        <SuperiorityItem key={item.image} {...item} />
      ))}
    </div>
  );
};

export default Superiority;
