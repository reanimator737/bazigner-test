import styled from 'styled-components';
import bg from '~/assets/map.png';
import { Button } from '~/components/buttons/style';

export const Container = styled.div`
  background-image: url('${bg}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 109px 0 113px;

  @media (max-width: 768px) {
    padding: 64px 0;
  }
`;

export const Card = styled.div`
  border-radius: 4px;
  width: 324px;
  padding: 24px;
  margin: 0 auto;
  background-color: rgba(75, 202, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  padding: 0 10px;
  height: 34px;
  font-size: 1.4rem;
  width: 100%;
  border: none;
  background-color: rgb(255, 255, 255);
  margin-top: 15px;
  border-radius: 4px;
  outline: none;
  color: black;
  &::placeholder {
    color: #d3d3d3;
    text-align: center;
  }

  &:first-of-type {
    margin-top: 30px;
  }
`;

export const TextArea = styled.textarea`
  height: 145px;
  padding: 10px;
  width: 100%;
  font-size: 1.4rem;
  border: none;
  background-color: rgb(255, 255, 255);
  margin-top: 15px;
  border-radius: 4px;
  resize: none;
  outline: none;

  color: black;
  &::placeholder {
    color: #d3d3d3;
    text-align: center;
  }
`;

export const SubmitButton = styled(Button)`
  padding: 0;
  height: 45px;
  width: 190px;
  border: none;
  font-weight: 600;
  text-transform: none;
  color: rgb(75, 202, 255);
  background-color: rgb(65, 64, 66);
  box-shadow: rgba(65, 64, 66, 1) 0 4px 3px;
  margin-top: 20px;

  &:hover {
    color: white;
    border: 1px solid rgb(65, 64, 66);
  }
`;
