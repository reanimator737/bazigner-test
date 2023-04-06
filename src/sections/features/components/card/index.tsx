import React, { PropsWithChildren } from 'react';
import { Container, DefaultText, SmallText, SvgContainer } from './style';

interface FeatureCardProps {
  title: string;
  description: string;
  to: string;
}

export const FeatureCard: React.FC<PropsWithChildren<FeatureCardProps>> = ({ to, title, description, children }) => {
  return (
    <Container href={to}>
      <SvgContainer>{children}</SvgContainer>
      <DefaultText>{title}</DefaultText>
      <SmallText>{description}</SmallText>
    </Container>
  );
};
