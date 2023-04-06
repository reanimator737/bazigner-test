import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  bottom: 16px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: transparent;
  transition: all 0.2s linear;
  &:hover {
    background-color: #4bcaff;
  }

  &.active {
    width: 16px;
    height: 16px;
    border: 1px solid #4bcaff;
    background-color: #4bcaff;
  }
`;
