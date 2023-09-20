import { IconType } from 'react-icons';

type SocialMediaItemProps = {
  icon: IconType;
  url: string;
  color: string;
};

const SocialMediaItem: React.FC<SocialMediaItemProps> = ({ icon: Icon, url, color }) => {
  return (
    <a href={url}>
      <div className={`w-11 h-11 rounded-full flex justify-center items-center ${color}`}>
        <Icon size={18} />
      </div>
    </a>
  );
};

export default SocialMediaItem;
