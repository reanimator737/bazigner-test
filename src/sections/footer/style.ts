import styled from 'styled-components';
import { BaseTemplate } from '~/components/templates/style';

export const Container = styled.div`
  height: 110px;
  background: rgba(65, 64, 66);
`;

export const Content = styled(BaseTemplate)`
  display: flex;
  height: 100%;
  gap: 48px;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.25);
`;
