import React from 'react';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';

import { Text } from '@src/Components/Text';
import Wrapper from '@src/Components/Wrapper';
import { Title } from '@src/Components/Title';
import { FadingContent } from '@src/Components/FadingContent';

function About() {
  const { t } = useTranslation('about');
  return (
    <section id="about">
      <Wrapper>
        <Wrapper>
          <Title color="darkOrange" size="large" titleAlignment="center">
            {t('about.about_title')}
          </Title>
        </Wrapper>
        <div className={styles.about_grid}>
          <FadingContent>
            <Text>
              {t('about.part_1')}
              {t('about.part_2')}
            </Text>
          </FadingContent>
          <FadingContent>
            <Text>
              {t('about.part_3')}
              {t('about.part_4')}
            </Text>
          </FadingContent>
        </div>
      </Wrapper>
    </section>
  );
}

export default About;
