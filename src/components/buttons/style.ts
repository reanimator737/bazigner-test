import styled from 'styled-components';

export const Button = styled.button`
  padding: 24px 0;
  cursor: pointer;
  border: 2px solid white;
  color: white;
  font-weight: 600;
  border-radius: 4px;
  background-color: transparent;
  transition: all 0.2s linear;
  text-transform: uppercase;

  &:hover {
    background-color: rgb(75, 202, 255);
    border-color: rgb(75, 202, 255);
    box-shadow: rgba(75, 202, 255, 0.5) 0 4px 6px;
  }

  @media (max-width: 991px) {
    padding: 16px 0;
  }
`;
