import Banner from './components/banner/Banner';
import Container from './components/Container';
import SectionLabel from './components/SectionLabel';

export default function Home() {
  return (
    <>
      <Banner />
      <Container>
        <div className='py-6'>
          <SectionLabel title='our product' afterWidth={'after:w-[28%] md:after:w-[35%] xl:after:w-[39%]'} beforeWidth={'before:w-[28%] md:before:w-[35%] xl:before:w-[39%]'} />
          {/* <Product /> */}
          <SectionLabel title='product promo' afterWidth={'after:w-[25%] md:after:w-[32%] xl:after:w-[37%]'} beforeWidth={'before:w-[25%] md:before:w-[32%] xl:before:w-[37%]'} />
          {/* <Product /> */}
          <SectionLabel title='our client' afterWidth={'after:w-[32%] md:after:w-[37%] xl:after:w-[41%]'} beforeWidth={'before:w-[32%] md:before:w-[37%] xl:before:w-[41%]'} />
          {/* <Product /> */}
        </div>
      </Container>
    </>
  );
}
