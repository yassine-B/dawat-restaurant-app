import { ReactNode } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import Styles from './Modal.module.css';

interface modalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ open, onClose, children }: modalProps) {
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={Styles.backdrop}
            onClick={onClose}>
            <motion.div
              className={`${Styles.modal} bg-white dark:bg-cardBackground`}
              initial={{ y: '-100vh' }}
              animate={{ y: '0' }}
              exit={{ y: '-100vh' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => {
                e.stopPropagation();
              }}>
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Modal;
