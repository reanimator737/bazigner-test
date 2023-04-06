import { BaseTemplate } from '~/components/templates/style';
import styled from 'styled-components';

export const Container = styled(BaseTemplate)`
  margin-top: 49px;
  margin-bottom: 107px;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 70px;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin-top: 58px;

  @media (max-width: 1200px) {
    gap: 10px;
  }

  @media (max-width: 991px) {
    grid-gap: 32px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    gap: 10px;
    grid-template-columns: 1fr;
  }
`;
