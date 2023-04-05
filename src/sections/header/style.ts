import styled from 'styled-components';
import { BaseTemplate } from '~/components/templates/style';

export const FixedContainer = styled.div`
  top: 0;
  z-index: 2;
  position: fixed;
  height: 100px;
  width: 100vw;
  //color
  background: rgba(7, 7, 7, 0.3);
`;

export const Container = styled(BaseTemplate)`
  display: flex;
  justify-content: space-between;

  svg {
    margin-top: 16px;
    width: 137px;
    height: 52px;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 16px;

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
      gap: 32px;
      width: 100vw;
      height: 100vh;
      background: black;
    }
  }
`;

export const MenuItem = styled.a`
  cursor: pointer;
  padding-top: 32px;
  transition: all 0.2s linear;
  font-size: 13px;
  //color
  color: rgb(246, 248, 249);
  border-top: 2px solid transparent;

  &:hover {
    //color
    color: rgb(73, 193, 244);
    border-top: 2px solid rgb(73, 193, 244);
  }

  @media (max-width: 768px) {
    padding: 0;
    font-size: 24px;

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
