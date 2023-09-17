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
    </footer>
  );
};

export default Footer;
