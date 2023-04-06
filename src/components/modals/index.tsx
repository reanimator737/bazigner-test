import React, { PropsWithChildren, useCallback } from 'react';
import { Bg, Container, Content } from '~/components/modals/style';

interface BaseModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BaseModal: React.FC<PropsWithChildren<BaseModalProps>> = ({ children, isOpen, setIsOpen }) => {
  const bgClick = useCallback(() => setIsOpen(false), []);
  return (
    <Container className={isOpen ? 'active' : ''}>
      <Bg onClick={bgClick} />
      <Content>{isOpen && children}</Content>
    </Container>
  );
};
