import { AiOutlineMail } from 'react-icons/ai';
import FooterLabel from './FooterLabel';

const CallCenter = () => {
  return (
    <div className='text-white py-6'>
      <FooterLabel label='call center' />
      <h3 className='font-semibold'>Sales Representatif :</h3>
      <ul className='mt-3 text-sm'>
        <li>087623472234</li>
        <li>081234566234</li>
        <li>089627534234</li>
      </ul>
      <div className='flex items-center gap-1 mt-2'>
        <AiOutlineMail />
        <span className='text-lg font-semibold'>example@example.com</span>
      </div>
    </div>
  );
};

export default CallCenter;
