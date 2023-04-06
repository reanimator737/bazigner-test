import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  position: absolute;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(32, 64, 81);
  top: calc(50% - 27px);
  transition: background-color 0.2s linear;

  & svg {
    & path {
      transition: fill 0.2s linear;
      fill: #d5dbde;
    }
  }

  &.left {
    left: 71px;
    transform: rotate(-90deg);
  }

  &.right {
    right: 71px;
    transform: rotate(90deg);
  }

  &:hover {
    background: #4bcaff;
    & svg {
      & path {
        fill: #000000;
      }
    }
  }

  @media (max-width: 1200px) {
    &.left {
      left: 32px;
    }

    &.right {
      right: 32px;
    }
  }

  @media (max-width: 768px) {
    &.left {
      left: 16px;
    }

    &.right {
      right: 16px;
    }
  }

  @media (max-width: 500px) {
    top: unset;
    bottom: 4px;
  }
`;
