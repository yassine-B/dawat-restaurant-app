import React from 'react';
import { useTranslation } from 'next-i18next';
import { Carousel } from 'react-responsive-carousel';
import { styles } from './Styles';

import { ArrowLeft, ArrowRight } from '@public/dummyData/Icons';
import Overlay from '@src/Components/Overlay';
import { useResize } from '@src/Hooks/useResize';

import Header from '../Header';
import Banner from './Banner';

interface carouselArrowButtonProps {
  side: 'left' | 'right';
  icon: JSX.Element;
  onClick: () => void;
  disabled: boolean;
}
const CarouselArrowButton = ({ side, icon, onClick, disabled }: carouselArrowButtonProps) => {
  return (
    <div className={`${styles.carousel_arrow_button_container} ${side}-0 `}>
      {disabled && (
        <button
          className={styles.carousel_arrow_button}
          onClick={() => {
            onClick();
          }}>
          {icon}
        </button>
      )}
    </div>
  );
};

function Hero({ onOpen }: { onOpen: () => void }) {
  const { i18n } = useTranslation();

  const [width] = useResize();
  const heroStyles: Record<string, any> = {
    '--hero-carousel-height': i18n.language === 'en' ? '220px' : '240px'
  };
  const result = ['banner_1', 'banner_2', 'banner_3', 'banner_4', 'banner_5', 'banner_6'].map(
    (bannerItem) => {
      return <Banner key={bannerItem} bannerId={bannerItem} onOpen={onOpen} />;
    }
  );

  return (
    <section id="home" style={width <= 420 ? heroStyles : undefined} className={styles.hero}>
      <Overlay opacity={50} />

      <Header onOpen={onOpen} />
      <div className={styles.hero_carousel_container}>
        <div className={styles.hero_carousel}>
          <Carousel
            renderArrowPrev={(clickHandler, hasPrev) => {
              return (
                <CarouselArrowButton
                  side="left"
                  icon={<ArrowLeft width={'20px'} height={'20px'} />}
                  disabled={hasPrev}
                  onClick={clickHandler}
                />
              );
            }}
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                <CarouselArrowButton
                  side="right"
                  icon={<ArrowRight width={'20px'} height={'20px'} />}
                  disabled={hasNext}
                  onClick={clickHandler}
                />
              );
            }}
            showThumbs={false}
            showArrows={width >= 640 ? true : false}
            showStatus={false}>
            {result}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Hero;
