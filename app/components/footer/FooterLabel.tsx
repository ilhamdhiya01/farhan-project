'use client';
const FooterLabel: React.FC<{ label: string }> = ({ label }) => {
  return <h2 className='uppercase font-bold after:content-[""] after:block after:w-full after:h-[2px] after:bg-gray-700/70 after:my-2'>{label}</h2>;
};

export default FooterLabel;
