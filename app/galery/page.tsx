import Container from '../components/Container';
import Galery from '../components/galery/Galery';

export const metadata = {
  title: 'Galery',
};

const page = () => {
  return (
    <>
      <Container>
        <div className='py-10'>
          <Galery />
        </div>
      </Container>
    </>
  );
};

export default page;
