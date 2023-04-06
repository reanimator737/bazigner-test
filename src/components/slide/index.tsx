import React, { PropsWithChildren } from 'react';
import { BgImg, Container } from './style';

export const Slide: React.FC<PropsWithChildren<{ bg: string }>> = ({ children, bg }) => {
  return (
    <Container>
      <BgImg src={bg} alt={'slide'} />
      {children}
    </Container>
  );
};
