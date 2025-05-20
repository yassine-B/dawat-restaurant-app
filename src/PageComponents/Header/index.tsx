import React from 'react';
import { styles } from './Styles';

import { useScroll } from '@src/Hooks/useScroll';
import { useResize } from '@src/Hooks/useResize';

import HeaderNav from './HeaderNav';
import HeaderInfo from './HeaderInfo';
import MobileHeader from './MobileHeader';

function Header({ onOpen }: { onOpen: () => void }) {
  const [scrollY] = useScroll();
  const [Width] = useResize();

  return (
    <section className={`${styles.header_container}`}>
      {Width <= 900 && <MobileHeader />}

      {Width > 900 && (
        <>
          {scrollY < 100 && <HeaderInfo onOpen={onOpen} />}
          <header
            className={`${
              scrollY > 80 ? styles.header_navigation : styles.hide_header_navigation
            }`}>
            <HeaderNav />
          </header>
        </>
      )}
    </section>
  );
}

export default Header;
