import styled from 'styled-components';

export const Container = styled.div`
  flex: 1 0 100%;
  position: relative;
  height: 800px;
  overflow: hidden;

  @media (max-width: 1200px) {
    height: 700px;
  }

  @media (max-width: 991px) {
    height: 600px;
  }

  @media (max-width: 768px) {
    height: 500px;
  }
`;

export const BgImg = styled.img`
  position: absolute;
  width: 100vw;
  height: 100%;
  background: rebeccapurple;
`;
