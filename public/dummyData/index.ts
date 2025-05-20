import {
  MobileHomeIcon,
  MobileAboutIcon,
  MobileOfferIcon,
  MobileMenuIcon,
  MobileLatestNewsIcon,
  MobileChefIcon,
  MobileGalleryIcon,
  MobileContactIcon
} from './Icons';

import Blog1 from '../assets/images/blogs/blog-1.jpg';
import Blog2 from '../assets/images/blogs/blog-2.jpg';

import Special1 from '../assets/images/special/special-1.jpg';
import Special2 from '../assets/images/special/special-2.jpg';

import Menu1 from '../assets/images/menu/menu-1.jpg';
import Menu2 from '../assets/images/menu/menu-2.jpg';
import Menu3 from '../assets/images/menu/menu-3.jpg';
import Menu4 from '../assets/images/menu/menu-4.jpg';
import Menu5 from '../assets/images/menu/menu-5.jpg';

import Gallery1 from '../assets/images/gallery/gallery-1.jpg';
import Gallery2 from '../assets/images/gallery/gallery-2.jpg';
import Gallery3 from '../assets/images/gallery/gallery-3.jpg';
import Gallery4 from '../assets/images/gallery/gallery-4.jpg';
import Gallery5 from '../assets/images/gallery/gallery-5.jpg';
import Gallery6 from '../assets/images/gallery/gallery-6.jpg';
import Gallery7 from '../assets/images/gallery/gallery-7.jpg';
import Gallery8 from '../assets/images/gallery/gallery-8.jpg';
import Gallery9 from '../assets/images/gallery/gallery-9.jpg';
import Gallery10 from '../assets/images/gallery/gallery-10.jpg';

import Chef1 from '../assets/images/chefs/chef-1.jpg';
import Chef2 from '../assets/images/chefs/chef-2.jpg';
import Chef3 from '../assets/images/chefs/chef-3.jpg';
import Chef4 from '../assets/images/chefs/chef-4.jpg';

export const navigationList = [
  { icon: MobileHomeIcon, path: 'home' },
  { icon: MobileAboutIcon, path: 'about' },
  { icon: MobileOfferIcon, path: 'offers' },
  { icon: MobileMenuIcon, path: 'menu' },
  { icon: MobileChefIcon, path: 'chefs' },
  { icon: MobileLatestNewsIcon, path: 'blogs' },
  { icon: MobileGalleryIcon, path: 'gallery' },
  { icon: MobileContactIcon, path: 'contact' }
];
export const galleryList = [
  { imageSource: Gallery1, imageDescription: '' },
  { imageSource: Gallery2, imageDescription: '' },
  { imageSource: Gallery3, imageDescription: '' },
  { imageSource: Gallery4, imageDescription: '' },
  { imageSource: Gallery5, imageDescription: '' },
  { imageSource: Gallery6, imageDescription: '' },
  { imageSource: Gallery7, imageDescription: '' },
  { imageSource: Gallery8, imageDescription: '' },
  { imageSource: Gallery9, imageDescription: '' },
  { imageSource: Gallery10, imageDescription: '' }
];

export const offersList = [
  {
    id: 'offer_1',
    imageSource: Special1
  },
  {
    id: 'offer_2',
    imageSource: Special2
  },
  {
    id: 'offer_3',
    imageSource: Special2
  }
];
export const blogsList = [
  {
    id: 'blog_1',
    imageSource: Blog1
  },
  {
    id: 'blog_2',
    imageSource: Blog2
  }
];

export const chefsList = [
  {
    id: 'chef_1',
    imageSource: Chef1
  },
  {
    id: 'chef_2',
    imageSource: Chef2
  },
  {
    id: 'chef_3',
    imageSource: Chef3
  },
  {
    id: 'chef_4',
    imageSource: Chef4
  }
];
export const menuList = [
  // lunch
  {
    id: 'lunch_1',
    imageSource: Menu1,
    category: 'lunch',
    price: 12.99
  },
  {
    id: 'lunch_2',
    imageSource: Menu2,
    category: 'lunch',
    price: 10.99
  },
  {
    id: 'lunch_3',
    imageSource: Menu3,
    category: 'lunch',
    price: 9.99
  },
  {
    id: 'lunch_4',
    imageSource: Menu4,
    category: 'lunch',
    price: 11.99
  },
  {
    id: 'lunch_5',
    imageSource: Menu5,
    category: 'lunch',
    price: 13.99
  },

  //breakfast

  {
    id: 'breakfast_1',
    imageSource: Menu1,
    category: 'breakfast',
    price: 7.99
  },
  {
    id: 'breakfast_2',
    imageSource: Menu2,
    category: 'breakfast',
    price: 10.99
  },
  {
    id: 'breakfast_3',
    imageSource: Menu3,
    category: 'breakfast',
    price: 8.99
  },
  {
    id: 'breakfast_4',
    imageSource: Menu4,
    category: 'breakfast',
    price: 6.99
  },
  {
    id: 'breakfast_5',
    imageSource: Menu5,
    category: 'breakfast',
    price: 9.99
  },

  //dinner

  {
    id: 'dinner_1',
    imageSource: Menu1,
    category: 'dinner',
    price: 16.99
  },
  {
    id: 'dinner_2',
    imageSource: Menu2,
    category: 'dinner',
    price: 14.99
  },
  {
    id: 'dinner_3',
    imageSource: Menu3,
    category: 'dinner',
    price: 18.99
  },
  {
    id: 'dinner_4',
    imageSource: Menu4,
    category: 'dinner',
    price: 12.99
  },
  {
    id: 'dinner_5',
    imageSource: Menu5,
    category: 'dinner',
    price: 15.99
  },

  //snacks

  {
    id: 'snacks_1',
    imageSource: Menu1,
    category: 'snacks',
    price: 6.99
  },
  {
    id: 'snacks_2',
    imageSource: Menu2,
    category: 'snacks',
    price: 8.99
  },
  {
    id: 'snacks_3',
    imageSource: Menu3,
    category: 'snacks',
    price: 7.99
  },
  {
    id: 'snacks_4',
    imageSource: Menu4,
    category: 'snacks',
    price: 9.99
  },
  {
    id: 'snacks_5',
    imageSource: Menu5,
    category: 'snacks',
    price: 10.99
  },

  //coffee

  {
    id: 'coffee_1',
    imageSource: Menu1,
    category: 'coffee',
    price: 2.99
  },
  {
    id: 'coffee_2',
    imageSource: Menu2,
    category: 'coffee',
    price: 3.99
  },
  {
    id: 'coffee_3',
    imageSource: Menu3,
    category: 'coffee',
    price: 4.45
  },
  {
    id: 'coffee_4',
    imageSource: Menu4,
    category: 'coffee',
    price: 4.45
  },
  {
    id: 'coffee_5',
    imageSource: Menu5,
    category: 'coffee',
    price: 3.99
  }
];
