import React from 'react';
import { useTranslation } from 'next-i18next';
import { bannerStyles } from './Styles';
import { Text } from '@src/Components/Text';
import { Title } from '@src/Components/Title';
import { Button } from '@src/Components/Button';

interface bannerInterface {
  bannerId: string;
  onOpen: () => void;
}

const Banner = ({ bannerId, onOpen }: bannerInterface) => {
  const { t } = useTranslation('hero');
  return (
    <div className={`${bannerStyles.banner}`}>
      <Title size="large" titleAlignment="center" color="white">
        {t(`hero.${bannerId}.title`)}
      </Title>
      <Text color="white" textAlignment="center" size="medium">
        {t(`hero.${bannerId}.sub_title`)}
      </Text>
      <Button onClick={onOpen} bgColor="white_border">
        {t(`hero.${bannerId}.button_title`)}
      </Button>
    </div>
  );
};

export default Banner;
