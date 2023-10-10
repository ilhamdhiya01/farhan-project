import Image from 'next/image';

const About = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5'>
        <div>
          <h2 className='text-2xl font-bold text-neutral-900'>About Us</h2>
          <p>Selamat datang di Jaya Mesin - Tempat Terbaik untuk Kepuasan Dapur Anda! Di Jaya Mesin, kami percaya bahwa dapur adalah hati dari setiap rumah, restoran, kafe, dan bisnis kuliner. Dapur adalah tempat di mana kreasi kuliner bermula, ide-ide lezat menjadi kenyataan, dan makanan lezat menjadi kenangan. Kami berkomitmen untuk membantu Anda menciptakan pengalaman memasak yang tak terlupakan dengan menyediakan peralatan dapur berkualitas tinggi dan peralatan bisnis yang inovatif.</p>
        </div>
        <div className=''>
          <Image src={'/images/about1.svg'} alt='about 1' width={500} height={500} className='w-full h-full md:w-4/5 md:h-4/5 object-cover' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-0'>
        <div className='md:order-2'>
          <div className='flex flex-col gap-3'>
            <div className=''>
              <h2 className='text-2xl font-bold text-neutral-900'>Misi Kami</h2>
              <p className='text-sm'>Misi kami adalah menyediakan peralatan berkualitas tinggi dan solusi yang efisien untuk membantu bisnis Anda berkembang. Kami memahami bahwa setiap bisnis memiliki kebutuhan yang berbeda, dan itu sebabnya kami menawarkan berbagai pilihan peralatan dari merek terkemuka dan berkualitas tinggi. Kami berkomitmen untuk memberikan layanan yang luar biasa dan bimbingan ahli kepada pelanggan kami untuk memastikan mereka mendapatkan yang terbaik untuk kebutuhan mereka.</p>
            </div>
            <div className=''>
              <h2 className='font-bold text-neutral-900'>Mengapa Memilih Kami?</h2>
              <ul className='flex flex-col gap-3 text-sm mt-3'>
                <li>
                  <span className='font-bold block'>Kualitas Terbaik:</span> Kami hanya menyediakan peralatan dari merek terkemuka yang telah terbukti dalam hal kualitas dan daya tahan.
                </li>
                <li>
                  <span className='font-bold block'>Pelayanan Pelanggan Terbaik:</span> Tim kami siap membantu Anda dengan setiap pertanyaan dan permintaan Anda. Kami percaya dalam memberikan pelayanan pelanggan yang luar biasa.
                </li>
                <li>
                  <span className='font-bold block'>Komitmen Terhadap Kepuasan Pelanggan:</span> Kepuasan Anda adalah prioritas utama kami. Kami berusaha keras untuk memastikan bahwa Anda mendapatkan produk dan layanan terbaik.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-full h-full overflow-hidden'>
          <Image width={500} height={500} src={'/images/about2.svg'} alt='about 1' className='w-full h-full md:w-4/5 md:h-4/5 object-cover aspect-square md:order-1' />
        </div>
      </div>
    </div>
  );
};

export default About;
