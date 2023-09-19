import Container from '../Container';
import Information from './Information';
import Location from './Location';
import Payment from './Payment';
import Superiority from './Superiority';

const Footer = () => {
  return (
    <footer className='bg-black'>
      <Container>
        <div className='grid grid-cols-1'>
          <div>
            <Information />
            <Superiority />
          </div>
          <div>
            <Payment />
            <Location />
          </div>
        </div>
      </Container>
      <div>
        <div className='uppercase text-center py-4 bg-gray-600 font-semibold text-gray-400 text-sm'>2023 | jaya agung mesin</div>
      </div>
    </footer>
  );
};

export default Footer;
