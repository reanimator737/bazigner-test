import React from 'react';
import { CardContainer, Container } from './style';
import { Header, SubHeader } from '~/components/text/style';
import { GalleryCard } from './components/cards';

export const Gallery: React.FC = () => {
  return (
    <Container id="gallery">
      <Header>show the gallery</Header>
      <SubHeader>summarise what your product is all about</SubHeader>
      <CardContainer>
        <GalleryCard>SCREEN SHOT #1</GalleryCard>
        <GalleryCard>SCREEN SHOT #2</GalleryCard>
        <GalleryCard>SCREEN SHOT #3</GalleryCard>
        <GalleryCard>SCREEN SHOT #4</GalleryCard>
      </CardContainer>
    </Container>
  );
};
