import styled from 'styled-components';
import { DefaultText as DT, SmallText as ST } from '~/components/text/style';

export const DefaultText = styled(DT)`
  //color
  color: #414042;
  font-weight: bold;
  margin-top: 30px;
  text-transform: uppercase;
  transition: all 0.2s linear;
`;

export const SmallText = styled(ST)`
  //color
  color: #838383;
  margin-top: 27px;
`;

export const SvgContainer = styled.div`
  width: 170px;
  height: 170px;
  //color
  border: 4px solid rgba(239, 239, 239, 1);
  border-radius: 50%;
  background: rgba(75, 202, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;

  @media (max-width: 1200px) {
    width: 120px;
    height: 120px;

    & svg {
      transform: scale(0.9);
    }
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;

    & svg {
      transform: scale(0.7);
    }
  }
`;

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  &:hover {
    & ${SvgContainer} {
      //color
      background: rgb(65, 64, 66);
    }

    & ${DefaultText} {
      //color
      color: #4bcaff;
    }
  }
`;
