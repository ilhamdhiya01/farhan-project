'use client';

import SocialMediaItem from './SocialMediaItem';
import { ImFacebook } from 'react-icons/im';
import { BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='flex flex-row items-center gap-2 mt-4'>
      <SocialMediaItem icon={ImFacebook} url='https:www.gabby.com' color='bg-[#3a589d]' />
      <SocialMediaItem icon={BsInstagram} url='https:www.gabby.com' color='bg-[#3b6994]' />
      <SocialMediaItem icon={BsTwitter} url='https:www.gabby.com' color='bg-[#2478ba]' />
      <SocialMediaItem icon={BsLinkedin} url='https:www.gabby.com' color='bg-[#0072b7]' />
    </div>
  );
};

export default SocialMedia;
