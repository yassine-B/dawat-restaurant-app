import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';
import { menuList } from '@public/dummyData';
import { Title } from '@src/Components/Title';
import { Text } from '@src/Components/Text';

function MenuList() {
  const { t } = useTranslation('menu');
  const result = menuList.map((menuItem) => {
    const { id, imageSource, price, category } = menuItem;

    {
      /* fix width from  1040 to 1024 */
    }
    return (
      <div key={id} className={`${styles.isotope_wrapper} menu-item ${category}`}>
        <div className={`${styles.menu_image_container}`}>
          <Image
            key={imageSource.src}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={imageSource.blurDataURL}
            src={imageSource.src}
            alt={t(`menu.menu_${category}.${id}.image_description`)}
          />
        </div>

        <div className={` ${styles.menu_details}`}>
          <div className={`${styles.menu_details_header}`}>
            <Title size="small">{t(`menu.menu_${category}.${id}.title`)}</Title>
            <div className={`${styles.menu_details_price}`}> $ {price}</div>
          </div>

          <Text styles={styles.menu_details_description}>
            {t(`menu.menu_${category}.${id}.description`)}
          </Text>
        </div>
      </div>
    );
  });
  return <>{result}</>;
}

export default MenuList;
