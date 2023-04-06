import React from 'react';
import { Container, Content } from './style';
import { SmallText } from '~/components/text/style';

export const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <SmallText>Copyright © 2013 | bazinger | All Rights Reserved</SmallText>
        <SmallText>Terms of Service | Privacy Policy</SmallText>
      </Content>
    </Container>
  );
};
