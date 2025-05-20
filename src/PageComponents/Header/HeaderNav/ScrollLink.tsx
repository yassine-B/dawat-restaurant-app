import React from 'react';
import { Link } from 'react-scroll';
import { linkStyles as styles } from './Styles';
import { useScroll } from '@src/Hooks/useScroll';

interface scrollLinkInterface {
  icon?: JSX.Element;
  linkPath: string;
  linkName: string;
  handleClose?: () => void;
}

function ScrollLink({ icon, linkName, linkPath, handleClose }: scrollLinkInterface) {
  const [scrollY] = useScroll();
  // const color = `${scrollY > 80 ? styles.link_hover_black : styles.link_hover_dark_orange}`;
  // const activeColor = `${scrollY > 80 ? styles.active_link_gray : styles.active_link_red}`;
  const color = styles.link_hover_black;
  const activeColor = styles.active_link_gray;
  const Icon = icon;
  return (
    <Link
      className={`${icon && styles.mobile_link} ${styles.link} ${color} `}
      to={linkPath}
      activeClass={`${styles.active_link} ${icon && 'border-b'}  ${activeColor} `}
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-70}
      duration={1000}
      delay={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      onClick={handleClose && handleClose}>
      {Icon && (
        <span className={`${'mx-6'}`}>
          <Icon />
        </span>
      )}
      {linkName}
    </Link>
  );
}

export default ScrollLink;
