'use client';

import FooterLabel from './FooterLabel';

const bankList = [
  {
    name: 'bank bca',
    bankAccount: 762736523,
  },
  {
    name: 'bank mandiri',
    bankAccount: 235726354723,
  },
  {
    name: 'bank bni',
    bankAccount: 238949239238,
  },
  {
    name: 'bank bri',
    bankAccount: 234687239723,
  },
];

const Payment = () => {
  return (
    <div className='text-white'>
      <FooterLabel label='payment' />
      <ul className='uppercase flex flex-col gap-3 text-sm'>
        {bankList.map((bank) => (
          <li key={bank.bankAccount} className='flex flex-col gap-1'>
            <span>{bank.name}</span>
            <span>{bank.bankAccount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Payment;
