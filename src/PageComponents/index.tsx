import React from 'react';

import Modal from '@src/Components/Modal';
import { useToggle } from '../Hooks/useToggle';

import Hero from './Hero';
import Menu from './Menu';
import Chefs from './Chefs';
import Blog from './Blog';
import Offer from './Offer';
import About from './About';
import Footer from './Footer';
import Gallery from './Gallery';
import BookTable from './BookTable';
import ReservationForm from './ReservationForm';

function PageComponents() {
  const { isOpen, onOpen, onClose } = useToggle();

  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <ReservationForm onClose={onClose} />
      </Modal>

      <Hero onOpen={onOpen} />
      <About />
      <Offer />
      <Menu />
      <BookTable onOpen={onOpen} />
      <Chefs />
      <Blog />
      <Gallery />
      <Footer />
    </>
  );
}

export default PageComponents;
