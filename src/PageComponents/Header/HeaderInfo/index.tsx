import React from 'react';
import { styles } from './Styles';
import { EmailIcon, PhoneIcon } from '@public/dummyData/Icons';
import { SocialIcons } from '@src/Components/SocialIcons';
import { Button } from '@src/Components/Button';

const HeaderInfo = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <div className={`${styles.header_info}`}>
      <div className={`${styles.header_info_left}`}>
        <div className={`${styles.header_contact}`}>
          <span>
            <EmailIcon />
          </span>
          dawat_restaurant@gmail.com
        </div>
        <div className={`${styles.header_contact}`}>
          <span>
            <PhoneIcon />
          </span>
          +1 800 231 5678
        </div>
      </div>

      <div className={`${styles.header_info_right}`}>
        <div className={`${styles.icons_container}`}>
          <SocialIcons />
        </div>

        <Button bgColor="gray" onClick={onOpen}>
          Book a Table
        </Button>
      </div>
    </div>
  );
};
export default HeaderInfo;
