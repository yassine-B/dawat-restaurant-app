import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { chefsListVariants, styles } from './Styles';
import { chefsList } from '@public/dummyData';

import { Text } from '@src/Components/Text';
import { Title } from '@src/Components/Title';
import Wrapper from '@src/Components/Wrapper';

const ChefsList = () => {
  const { t } = useTranslation('chefs');
  const result = chefsList.map((chef) => {
    const { id, imageSource } = chef;
    return (
      <motion.div
        key={id}
        className={`${styles.chefs_list_container}`}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          once: true,
          margin: '200px'
        }}
        variants={chefsListVariants}>
        <Image
          key={imageSource.src}
          width={500}
          height={300}
          placeholder="blur"
          blurDataURL={imageSource.blurDataURL}
          src={imageSource.src}
          alt={t(`chefs.${id}.image_description`)}
        />
        <div>
          <Title size="small" titleAlignment="center">
            {t(`chefs.${id}.title`)}
          </Title>
          <Text textAlignment="center"> {t(`chefs.${id}.description`)}</Text>
        </div>
      </motion.div>
    );
  });
  return <>{result}</>;
};
function Chefs() {
  const { t } = useTranslation('chefs');
  return (
    <section id="chefs">
      <Wrapper>
        <Wrapper>
          <Title titleAlignment="center" color="darkOrange" size="large">
            {t(`chefs.chefs_title`)}
          </Title>
        </Wrapper>
        <div className={styles.chefs_container}>
          <ChefsList />
        </div>
      </Wrapper>
    </section>
  );
}

export default Chefs;
