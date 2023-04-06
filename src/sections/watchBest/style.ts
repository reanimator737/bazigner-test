import styled from 'styled-components';
import src from '~/assets/watchBestBg.png';
import { Title as TitleBase, LargeText as LargeTextBase } from '~/components/text/style';

export const Bg = styled.div`
  background-image: url('${src}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const Container = styled.div`
  padding: 162px 0 146px;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background: rgba(9, 181, 245, 0.3);
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 64px 16px;
  }
`;

export const Youtube = styled.img`
  width: 115px;
  height: 74px;
  cursor: pointer;
`;

export const Title = styled(TitleBase)`
  font-weight: 300;
  margin-top: 38px;
  text-align: center;
  & b {
    font-size: inherit;
    font-weight: 600;
  }
`;

export const LargeText = styled(LargeTextBase)`
  max-width: 675px;
  margin-top: 27px;
  font-weight: 300;
  text-align: left;
`;
