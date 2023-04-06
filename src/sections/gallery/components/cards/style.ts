import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 24px;
`;

export const Plus = styled.span`
  transition: all 0.2s linear;
  font-size: 45px;
  color: transparent;
  margin-top: -22px;
`;

export const Screenshot = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  //color
  background: rgba(64, 65, 66, 0.6);

  transition: all 0.2s linear;
  position: relative;

  &:hover {
    background: rgb(75, 202, 255);

    & ${Plus} {
      color: #ffffff;
    }
  }
`;

export const ScreenshotOverlay = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 12px 0;
  font-weight: bold;
  background: rgba(65, 64, 66, 0.65);
  border-radius: 0 0 4px 4px;
  color: #4bcaff;
`;
