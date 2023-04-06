import React from 'react';
import { Container } from './style';
import { ReactComponent as Arrow } from '~/assets/arrow.svg';

interface ActiveButtonProps {
  onClick: () => void;
  className: 'left' | 'right';
}

export const ActiveButton: React.FC<ActiveButtonProps> = ({ className, onClick }) => {
  return (
    <Container className={className} onClick={onClick}>
      <Arrow />
    </Container>
  );
};
