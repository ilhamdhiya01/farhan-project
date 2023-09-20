import './globals.css';
import Banner from './components/banner/Banner';
import Container from './components/Container';
import SectionLabel from './components/SectionLabel';
import Product from './components/product/Product';

export default function Home() {
  return (
    <main className='w-full min-h-screen'>
      <Banner />
      <Container>
        <div className='py-6'>
          <SectionLabel title='our product' afterWidth={'after:w-[28%] md:after:w-[35%]'} beforeWidth={'before:w-[28%] md:before:w-[35%]'} />
          <Product />
          <SectionLabel title='product promo' afterWidth={'after:w-[25%] md:after:w-[32%]'} beforeWidth={'before:w-[25%] md:before:w-[32%]'} />
          <Product />
          <SectionLabel title='our client' afterWidth={'after:w-[32%] md:after:w-[37%]'} beforeWidth={'before:w-[32%] md:before:w-[37%]'} />
          <Product />
        </div>
      </Container>
    </main>
  );
}
