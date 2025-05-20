import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';

import { offersList } from '@public/dummyData';

import { Text } from '@src/Components/Text';
import { Title } from '@src/Components/Title';
import Overlay from '@src/Components/Overlay';
import { Button } from '@src/Components/Button';
import { useResize } from '@src/Hooks/useResize';

interface offerCardProps {
  id: string;
  imageSource: StaticImageData;
}

const OfferCard = ({ item }: { item: offerCardProps }) => {
  const { t } = useTranslation('offers');

  const { id, imageSource } = item;
  return (
    <div className={`${styles.offer_card}`}>
      <div className={`${styles.offer_image_container}`}>
        <Image
          key={imageSource.src}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          className={styles.offer_image}
          blurDataURL={imageSource.blurDataURL}
          src={imageSource.src}
          alt={t(`offers.${id}.image_description`)}
        />
      </div>
      <div className={`${styles.offer_card_position}`}>
        <div className={`${styles.offer_card_detail}`}>
          <Title size="small">{t(`offers.${id}.title`)}</Title>
          <div className={`${styles.hide_offer_card_detail}`}>
            <Text>{t(`offers.${id}.description`)}</Text>
            <Button
              bgColor="darkOrange"
              onClick={() => {
                return;
              }}>
              {t(`offers.button_title`)}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
function Offers() {
  const { i18n, t } = useTranslation('offers');

  const [width] = useResize();
  const offerStyles: Record<string, any> = {
    '--offer-carousel-height': i18n.language === 'en' ? '480px' : '505px'
  };

  const result = offersList.map((item) => {
    return <OfferCard key={item.id} item={item} />;
  });
  return (
    <section
      id="offers"
      style={width <= 420 ? offerStyles : undefined}
      className={`${styles.offer_container}`}>
      <Overlay />
      <div className={`${styles.offer_title} `}>
        <Title color="darkOrange" size="large" titleAlignment="center">
          {t(`offers.offers_title`)}
        </Title>
      </div>

      <div className={`${styles.offer_slider} offer_carousel`}>
        <Carousel showThumbs={false} showArrows={false} showStatus={false} width="100%">
          {result}
        </Carousel>
      </div>
    </section>
  );
}
export default Offers;
