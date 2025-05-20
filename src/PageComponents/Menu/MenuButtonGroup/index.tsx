import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';
import { menuList } from '@public/dummyData';

interface mobileSelectListProps {
  setFilterKey: React.Dispatch<React.SetStateAction<string>>;
}

const MenuButtonGroup = ({ setFilterKey }: mobileSelectListProps) => {
  const { t } = useTranslation('menu');
  const [category, setCategory] = useState('all');
  const a = menuList.map((menuItem) => menuItem.category);
  const categoriesList = ['all', ...new Set(a)];
  console.log(`File: index`, a, categoriesList);
  const result = categoriesList.map((categoryName) => {
    const activeCategory =
      categoryName === category
        ? `${styles.active_button} ${styles.active_button_text_color}`
        : `${styles.button_hover} ${styles.button_text_color}`;
    return (
      <button
        key={categoryName}
        onClick={() => {
          setFilterKey(`${categoryName === 'all' ? '*' : categoryName}`);
          setCategory(categoryName);
        }}
        className={`${activeCategory} ${styles.button} `}>
        {t(`menu.menu_buttons.${categoryName}`)}
      </button>
    );
  });
  return <>{result}</>;
};

export default MenuButtonGroup;
