import Image from 'next/image';

const Logo = () => {
  return <Image alt='logo' src={'/images/logo.png'} height={100} width={100} />;
};

export default Logo;
