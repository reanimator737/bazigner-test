import styled from 'styled-components';

export const BaseTemplate = styled.div`
  width: 1171px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 0 32px;
    width: 100vw;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;
