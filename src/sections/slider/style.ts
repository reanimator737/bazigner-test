import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  position: relative;
`;

export const SliderList = styled.div<{ activeSlide: number }>`
  display: flex;
  height: 100%;
  transition: transform 0.4s ease-in-out;
  width: 100%;

  transform: translateX(${({ activeSlide }) => -100 * activeSlide}%);
`;
