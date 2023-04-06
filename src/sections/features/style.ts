import styled from 'styled-components';
import { BaseTemplate } from '~/components/templates/style';

export const Container = styled.div`
  width: 100%;
  padding: 49px 0 92px;
  display: flex;
  flex-direction: column;
  align-items: center;

  //color
  background: rgba(249, 249, 249, 1);
`;

export const SummariseBlock = styled(BaseTemplate)`
  display: grid;
  gap: 96px;
  margin-top: 67px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1200px) {
    gap: 32px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
