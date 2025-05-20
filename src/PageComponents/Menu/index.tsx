import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';

import Wrapper from '@src/Components/Wrapper';
import { Title } from '@src/Components/Title';
import { useIsotope } from '@src/Hooks/useIsotope';

import MenuList from './MenuList';
import MenuButtonGroup from './MenuButtonGroup';

function MenuView() {
  const { t } = useTranslation('menu');
  const [filterKey, setFilterKey] = useState('*');
  const { isotope } = useIsotope({
    selector: '.menu-isotope',
    options: {
      itemSelector: '.menu-item',
      resize: true,
      masonry: {
        columnWidth: 50,
        fitWidth: true,
        gutter: 10
      }
    }
  });

  useEffect(() => {
    if (isotope) {
      filterKey === '*'
        ? isotope.arrange({ filter: '*' })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);
  return (
    <section id="menu">
      <Wrapper>
        <Title titleAlignment="center" color="darkOrange" size="large">
          {t('menu.menu_title')}
        </Title>
      </Wrapper>
      <div className={`${styles.menu_container}`}>
        <div className={`${styles.menu_button_group}`}>
          <MenuButtonGroup setFilterKey={setFilterKey} />
        </div>

        <div className={`${styles.menu_grid} menu-isotope`}>
          <MenuList />
        </div>
      </div>
    </section>
  );
}

export default MenuView;
