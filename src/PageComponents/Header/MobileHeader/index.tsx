import React from 'react';
import { useTranslation } from 'next-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { mobileIconVariants, mobileMenuVariants, styles } from './Styles';
import { CloseIcon, MobileToggleIcon, SearchIcon } from '@public/dummyData/Icons';
import { navigationList } from '@public/dummyData';

import { useToggle } from '@src/Hooks/useToggle';
import Overlay from '@src/Components/Overlay';
import { Title } from '@src/Components/Title';
import { Button } from '@src/Components/Button';
import ScrollLink from '../HeaderNav/ScrollLink';
import ThemeToggler from '@src/Components/ThemeToggler';
import { LanguagesDropdown } from '@src/Components/LanguagesDropdown';

function MobileHeader() {
  const { isOpen, onToggle, onClose } = useToggle();
  const { t } = useTranslation('header');
  const navigationLinks = navigationList.map((nav) => {
    const { icon, path } = nav;
    return (
      <ScrollLink
        key={path}
        handleClose={onClose}
        icon={icon}
        linkPath={path}
        linkName={t(`header_navigation.${nav.path}`)}
      />
    );
  });
  const navigationHeader = (
    <header className={`${styles.header_container} `}>
      <Title styles="dark:text-black" size="small">
        dawat restaurant
      </Title>
      <div className={`${styles.header_menu_list}`}>
        <div className={styles.header_menu_list_content}>
          <ThemeToggler />
          <LanguagesDropdown />
        </div>
        <Button styles={styles.header_menu_button} onClick={onToggle}>
          <motion.div
            animate={isOpen ? 'open' : 'closed'}
            variants={mobileIconVariants}
            transition={{ duration: 0.3 }}>
            {isOpen ? <CloseIcon /> : <MobileToggleIcon />}
          </motion.div>
        </Button>
      </div>
    </header>
  );
  const navigationListComponent = (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={mobileMenuVariants}
          transition={{ duration: 0.5 }}
          className={styles.header_navigation_list}>
          {navigationLinks}
          <span style={{ color: 'white' }}>
            <SearchIcon />
          </span>
        </motion.nav>
      )}
    </AnimatePresence>
  );
  return (
    <section className="relative">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.header_overlay}></motion.div>
        )}
      </AnimatePresence>
      {navigationHeader}
      {navigationListComponent}
    </section>
  );
}

export default MobileHeader;
