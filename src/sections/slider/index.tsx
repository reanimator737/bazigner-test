import React, { useCallback, useMemo, useState } from 'react';
import { Container, SliderList } from './style';
import { FirstSlideContent } from './components/slides/firstSlide';
import { Slide } from '~/components/slide';
import bg1 from '~/assets/firstSlide.jpg';
import bg2 from '~/assets/secondSlide.jpg';
import bg3 from '~/assets/thirdSlide.jpg';
import { ActiveButton } from './components/activeButton';
import { Dots } from './components/dots';

interface Data {
  bg: string;
  children: JSX.Element;
}

export const Slider: React.FC = () => {
  const data: Data[] = useMemo(
    () => [
      { bg: bg1, children: <FirstSlideContent /> },
      { bg: bg2, children: <FirstSlideContent /> },
      { bg: bg3, children: <FirstSlideContent /> },
    ],
    [],
  );

  const [activeSlide, setActiveSlide] = useState<number>(0);

  const leftClick = useCallback(() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : prev)), []);
  const rightClick = useCallback(() => setActiveSlide((prev) => (prev < data.length - 1 ? prev + 1 : prev)), []);

  return (
    <Container id="home">
      <SliderList activeSlide={activeSlide}>
        {data.map(({ children, bg }, id) => (
          <Slide bg={bg} key={id}>
            {children}
          </Slide>
        ))}
      </SliderList>

      <ActiveButton className="left" onClick={leftClick} />
      <ActiveButton className="right" onClick={rightClick} />

      <Dots activeSlide={activeSlide} setActiveSlide={setActiveSlide} length={data.length} />
    </Container>
  );
};
