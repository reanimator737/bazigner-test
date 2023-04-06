import styled from 'styled-components';
import { BaseTemplate } from '~/components/templates/style';

export const FixedContainer = styled.div`
  top: 0;
  z-index: 2;
  position: fixed;
  height: 100px;
  width: 100vw;
  background: rgba(7, 7, 7, 0.3);

  @media (max-width: 1200px) {
    height: 90px;
  }

  @media (max-width: 991px) {
    height: 80px;
  }

  @media (max-width: 768px) {
    height: 60px;
  }
`;

export const Container = styled(BaseTemplate)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  svg {
    margin-top: 16px;
    width: 137px;
    height: 52px;
  }

  @media (max-width: 991px) {
    svg {
      margin-top: 8px;
      width: 110px;
      height: auto;
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 16px;
  height: 100%;

  @media (max-width: 768px) {
    display: none;

    &.active {
      z-index: -1;
      top: 0;
      left: 0;
      display: flex;
      position: absolute;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      width: 100vw;
      height: 100vh;
      background: black;
    }
  }
`;

export const MenuItem = styled.a`
  cursor: pointer;
  transition: all 0.2s linear;
  font-size: 1.3rem;
  color: rgb(246, 248, 249);
  border-top: 2px solid transparent;
  height: 100%;
  padding-top: 42px;

  &:hover {
    color: rgb(73, 193, 244);
    border-top: 2px solid rgb(73, 193, 244);
  }

  @media (max-width: 991px) {
    padding-top: 36px;
  }

  @media (max-width: 768px) {
    margin-top: 32px;
    padding: 0;
    height: auto;
    font-size: 2.4rem;

    &:hover {
      border: none;
    }
  }
`;

export const Line = styled.div`
  width: 24px;
  height: 2px;
  background: rgb(246, 248, 249);
  transition: all 0.2s linear;
`;

export const BurgerMenu = styled.div`
  display: none;

  flex-direction: column;
  gap: 4px;

  &:hover ${Line} {
    background: rgb(73, 193, 244);
  }

  &.active ${Line}.first {
    opacity: 0;
  }

  &.active ${Line}.second {
    transform: rotate(-45deg);
  }

  &.active ${Line}.third {
    transform: rotate(45deg);
    position: relative;
    top: -6px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
