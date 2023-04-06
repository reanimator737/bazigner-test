import React, { useMemo } from 'react';
import { Container, Dot } from './style';

interface DotsProps {
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
  activeSlide: number;
  length: number;
}

export const Dots: React.FC<DotsProps> = ({ setActiveSlide, activeSlide, length }) => {
  const array = useMemo(() => new Array(length).fill(''), [length]);
  return (
    <Container>
      {array.map((_, index) => (
        <Dot className={activeSlide === index ? 'active' : ''} onClick={() => setActiveSlide(index)} />
      ))}
    </Container>
  );
};
