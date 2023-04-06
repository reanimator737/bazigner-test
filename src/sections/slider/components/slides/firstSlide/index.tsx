import React from 'react';
import {
  AvailableOnContainer,
  AvailableOnText,
  ButtonContainer,
  Container,
  Content,
  Hand,
  LargeText,
  PlatformLink,
  Title,
} from './style';
import { Button } from '~/components/buttons/style';
import { DefaultText } from '~/components/text/style';
import src from '~/assets//handWithIPhone.png';
import { ReactComponent as AndroidSVG } from '~/assets/android.svg';
import { ReactComponent as AppleSVG } from '~/assets/apple.svg';

export const FirstSlideContent: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>
          Simple, Beautiful <b>and Amazing</b>
        </Title>

        <LargeText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc vitae tellus luctus ullamcorper. Nam
          porttitor ullamcorper felis at convallis. Aenean ornare vestibulum nisi fringilla lacinia. Nullam pulvinar
          sollicitudin velit id laoreet. Quisque non rhoncus sem.
        </LargeText>

        <ButtonContainer>
          <Button>
            <DefaultText>DOWNLOAD</DefaultText>
          </Button>

          <Button>
            <DefaultText>LEARN MORE</DefaultText>
          </Button>
        </ButtonContainer>

        <AvailableOnContainer>
          <AvailableOnText>Available on :</AvailableOnText>

          <PlatformLink>
            <AppleSVG />
          </PlatformLink>

          <PlatformLink>
            <AndroidSVG />
          </PlatformLink>
        </AvailableOnContainer>
      </Content>
      <Hand src={src} />
    </Container>
  );
};
