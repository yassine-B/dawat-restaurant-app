import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';
import { galleryList } from '@public/dummyData';
import Wrapper from '@src/Components/Wrapper';
import { Title } from '@src/Components/Title';

const GalleryItem = () => {
  const result = galleryList.map((galleryItem) => {
    return (
      <Image
        key={galleryItem.imageSource.src}
        width={200}
        height={200}
        placeholder="blur"
        blurDataURL={galleryItem.imageSource.blurDataURL}
        className={styles.gallery_image}
        src={galleryItem.imageSource.src}
        alt={galleryItem.imageDescription}
      />
    );
  });
  return <>{result}</>;
};
function GalleryView() {
  const { t } = useTranslation('common');
  return (
    <section id="gallery">
      <Wrapper>
        <Wrapper>
          <Title titleAlignment="center" color="darkOrange" size="large">
            {t('gallery_title')}
          </Title>
        </Wrapper>
        <div className={styles.gallery}>
          <GalleryItem />
        </div>
      </Wrapper>
    </section>
  );
}

export default GalleryView;
