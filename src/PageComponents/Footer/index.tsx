import React from 'react';
import { useTranslation } from 'next-i18next';
import { animateScroll } from 'react-scroll';
import { styles } from './Styles';
import { ArrowUpIcon } from '@public/dummyData/Icons';

import { Text } from '@src/Components/Text';
import { Title } from '@src/Components/Title';
import Overlay from '@src/Components/Overlay';
import { SocialIcons } from '@src/Components/SocialIcons';

function Footer() {
  const { t } = useTranslation('footer');
  function ScrollToTop() {
    return animateScroll.scrollToTop();
  }

  return (
    <section id="contact" className={`${styles.footer_background}`}>
      <Overlay />
      <div className={`${styles.footer_container}`}>
        <div className={styles.footer_header_container}>
          <Title size="large" titleAlignment="center" color="white">
            {t('footer.footer_title')}
          </Title>
        </div>

        <div className={`${styles.top_column}`}>
          <Text textAlignment="center" color="white">
            {t('footer.address')}
          </Text>
          <Text color="white">dawat_restaurant@gmail.com</Text>
          <Text color="white">+123-123-123</Text>
          <div className={`${styles.icons_container}`}>
            <SocialIcons />
          </div>
        </div>

        <div className={styles.bottom_column}>
          <ul className={styles.links_list}>
            <li className={styles.link_item}> {t('footer.links.term_of_use')}</li>
            <li className={styles.link_item}>{t('footer.links.privacy_policy')}</li>
            <li className={styles.link_item}>{t('footer.links.site_map')}</li>
            <li className={styles.link_item}>{t('footer.links.contact')}</li>
          </ul>
          <div className={`${styles.scroll_to_top_button}`}>
            <a href="#" className="text-white" onClick={ScrollToTop}>
              <ArrowUpIcon />
            </a>
          </div>

          <Text color="white">
            &copy;{new Date().getFullYear()} {t('footer.copyright')}
          </Text>
        </div>
      </div>
    </section>
  );
}

export default Footer;
