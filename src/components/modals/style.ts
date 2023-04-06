import styled from 'styled-components';

export const Bg = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: transparent;
  transition: all 0.2s linear;
`;

export const Content = styled.div`
  display: flex;
  width: 60%;
  height: 50%;
  background: white;
  border-radius: 20px;
  transform: translateY(-100%);
  transition: all 0.1s linear;

  & iframe {
    border-radius: 20px;
    width: 100%;
    height: auto;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;

  z-index: 3;

  &.active {
    pointer-events: auto;
    opacity: 1;

    & ${Bg} {
      background: rgba(0, 0, 0, 0.6);
    }

    & ${Content} {
      transform: translateY(0);
    }
  }
`;
