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
        <div className=''>
          <SectionLabel title='our product' width={'28%'} />
          <Product />
          <SectionLabel title='product promo' width={'25%'} />
          <Product />
          <SectionLabel title='our client' width={'28%'} />
          <Product />
        </div>
      </Container>
    </main>
  );
}
