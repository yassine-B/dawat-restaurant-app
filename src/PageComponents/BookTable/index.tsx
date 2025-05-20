import React from 'react';
import { styles } from './Styles';
import { Button } from '@src/Components/Button';
import { Title } from '@src/Components/Title';
import Overlay from '@src/Components/Overlay';

function Reservation({ onOpen }: { onOpen: () => void }) {
  return (
    <div className={`${styles.container}`}>
      <Overlay />
      <div className="z-30 space-y-6">
        <Title color="white" size="large">
          book a table now !
        </Title>
        <Button onClick={onOpen} bgColor="gray">
          book now
        </Button>
      </div>
    </div>
  );
}

export default Reservation;
