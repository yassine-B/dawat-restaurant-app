import React from 'react';
import { useTranslation } from 'next-i18next';
import { navStyles as styles } from './Styles';
import { navigationList } from '@public/dummyData';
import { SearchIcon } from '@public/dummyData/Icons';

import { Title } from '@src/Components/Title';
import ThemeToggler from '@src/Components/ThemeToggler';
import { LanguagesDropdown } from '@src/Components/LanguagesDropdown';
import ScrollLink from './ScrollLink';

const Links = () => {
  const { t } = useTranslation('header');
  const result = navigationList.map((nav) => {
    return (
      <ScrollLink
        key={nav.path}
        linkPath={nav.path}
        linkName={t(`header_navigation.${nav.path}`)}
      />
    );
  });
  return <>{result}</>;
};
const HeaderNav = () => {
  const { t } = useTranslation('common');
  return (
    <div className={`${styles.header_nav}`}>
      <div className={` ${styles.nav}`}>
        <Title color="white" size="small">
          {t('restaurant_name')}
        </Title>

        <nav className={`${styles.nav_list}`}>
          <Links />
          <SearchIcon />
          <ThemeToggler />
          <LanguagesDropdown />
        </nav>
      </div>
    </div>
  );
};

export default HeaderNav;
