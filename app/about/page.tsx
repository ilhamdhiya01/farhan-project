import Container from '../components/Container';
import About from '../components/about/About';

const page = () => {
  return (
    <>
      <Container>
        <div className='py-10'>
          <About />
        </div>
      </Container>
    </>
  );
};

export default page;
