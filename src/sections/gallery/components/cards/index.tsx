import React, { PropsWithChildren } from 'react';
import { Container, ScreenshotOverlay, Screenshot, Plus } from './style';
import { DefaultText } from '~/components/text/style';

export const GalleryCard: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Screenshot>
        <Plus>+</Plus>
        <ScreenshotOverlay>
          <DefaultText>{children}</DefaultText>
        </ScreenshotOverlay>
      </Screenshot>
    </Container>
  );
};
