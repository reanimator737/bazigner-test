import styled from 'styled-components';
import { BaseTemplate } from '~/components/templates/style';
import { Title as TitleBase, LargeText as LargeTextBase } from '~/components/text/style';

export const Container = styled(BaseTemplate)`
  display: flex;
  position: relative;
  justify-content: flex-end;
  margin-top: 349px;
  padding: 0 110px;

  @media (max-width: 1200px) {
    margin-top: 249px;
    width: auto;
    justify-content: center;
  }

  @media (max-width: 991px) {
    margin-top: 149px;
    padding: 0 112px;
  }

  @media (max-width: 768px) {
    margin-top: 100px;
    padding: 0 96px;
  }

  @media (max-width: 500px) {
    margin-top: 90px;
    padding: 0 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(TitleBase)`
  font-weight: 300;
  color: white;

  & b {
    font-size: inherit;
    font-weight: 600;
  }
`;

export const LargeText = styled(LargeTextBase)`
  max-width: 675px;
  color: white;
  font-weight: 300;
  margin-top: 24px;

  @media (max-width: 768px) {
    margin-top: 16px;
  }

  @media (max-width: 500px) {
    margin-top: 12px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 195px 195px;
  gap: 40px;

  @media (max-width: 991px) {
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    margin-top: 24px;
    gap: 24px;
    grid-template-columns: 170px 170px;
  }

  @media (max-width: 500px) {
    margin-top: 16px;
    grid-template-columns: 1fr 1fr;
  }
`;

export const AvailableOnContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 49px;

  @media (max-width: 991px) {
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    margin-top: 24px;
  }

  @media (max-width: 500px) {
    margin-top: 16px;
  }
`;

export const PlatformLink = styled.a`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: rgba(3, 3, 3, 0.35);
  cursor: pointer;

  transition: all 0.2s linear;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 28px;
    height: auto;
    & path {
      transition: all 0.2s linear;
      fill: white;
    }
  }

  &:hover {
    & svg path {
      fill: rgb(75, 202, 255);
    }
  }
`;

export const AvailableOnText = styled(LargeText)`
  margin: 0;
`;

export const Hand = styled.img`
  position: absolute;
  width: 626px;
  height: 756px;
  bottom: -350px;
  left: -300px;

  @media (max-width: 1300px) {
    width: 500px;
    height: 604px;
    bottom: -231px;
    left: -157px;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
