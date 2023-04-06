import React, { useCallback, useState } from 'react';
import { Bg, Container, LargeText, Title, Youtube } from './style';
import src from '~/assets/youtube.png';
import { BaseModal } from '~/components/modals';

export const WatchBest: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const youtubeClick = useCallback(() => setIsModalOpen(true), []);
  return (
    <>
      <Bg>
        <Container id="video">
          <Youtube src={src} onClick={youtubeClick} alt={'youtube icon for open modal'} />
          <Title>
            Watch the best Technology in <b>Action</b>
          </Title>
          <LargeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc vitae tellus luctus ullamcorper. Nam
            porttitor ullamcorper felis at convallis. Aenean ornare vestibulum nisi fringilla lacinia. Nullam pulvinar
            sollicitudin velit id laoreet. Quisque non rhoncus sem.
          </LargeText>
        </Container>
      </Bg>
      <BaseModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wz_AiUkdJps"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </BaseModal>
    </>
  );
};
