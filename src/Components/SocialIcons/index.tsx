import React from 'react';
import { YoutubeIcon, FacebookIcon, TwitterIcon, InstagramIcon } from '@public/dummyData/Icons';

const Styles = {
  icon: 'transition-item text-white hover:text-opacity-60 cursor-pointer'
};

const iconsList = [
  { id: 'facebook_icon', icon: <FacebookIcon /> },
  { id: 'twitter_icon', icon: <TwitterIcon /> },
  { id: 'instagram_icon', icon: <InstagramIcon /> },
  { id: 'youtube_icon', icon: <YoutubeIcon /> }
];
export const SocialIcons = () => {
  const result = iconsList.map((icon) => {
    return (
      <span key={icon.id} className={Styles.icon}>
        {icon.icon}
      </span>
    );
  });
  return <>{result}</>;
};
