import React from 'react';
import { Container, SummariseBlock } from './style';
import { SubHeader, Header } from '~/components/text/style';
import { FeatureCard } from './components/card';
import { ReactComponent as Attractive } from '~/assets/attractive.svg';
import { ReactComponent as EasyToCustomize } from '~/assets/easyToCustomize.svg';
import { ReactComponent as FreshDesign } from '~/assets/freshDesign.svg';
import { ReactComponent as Multipurpose } from '~/assets/multipurpose.svg';

export const Features: React.FC = () => {
  return (
    <Container id="features">
      <Header>summarise the features</Header>
      <SubHeader>summarise what your product is all about</SubHeader>
      <SummariseBlock>
        <FeatureCard
          title="Attractive Layout"
          to=""
          description="Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar."
        >
          <Attractive />
        </FeatureCard>
        <FeatureCard
          to=""
          title="Fresh Design"
          description="Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar."
        >
          <FreshDesign />
        </FeatureCard>
        <FeatureCard
          title="multipurpose"
          to=""
          description="Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar."
        >
          <Multipurpose />
        </FeatureCard>
        <FeatureCard
          title="Easy to customize"
          to=""
          description="Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar."
        >
          <EasyToCustomize />
        </FeatureCard>
      </SummariseBlock>
    </Container>
  );
};
