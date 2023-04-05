import React, { useState } from 'react';
import { Container, FixedContainer, Line, MenuContainer, MenuItem } from './style';
import { ReactComponent as Logo } from '~/assets/logo.svg';
import { BurgerMenu } from './style';

export const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  return (
    <FixedContainer>
      <Container>
        <Logo />
        <MenuContainer className={menuIsOpen ? 'active' : ''}>
          <MenuItem>HOME</MenuItem>
          <MenuItem>FEATURES</MenuItem>
          <MenuItem>GALLERY</MenuItem>
          <MenuItem>VIDEO</MenuItem>
          <MenuItem>TESTIMONIALS</MenuItem>
          <MenuItem>DOWNLOAD</MenuItem>
          <MenuItem>CONTACT</MenuItem>
        </MenuContainer>

        <BurgerMenu className={menuIsOpen ? 'active' : ''} onClick={() => setMenuIsOpen((prevState) => !prevState)}>
          <Line className={'first'} />
          <Line className={'second'} />
          <Line className={'third'} />
        </BurgerMenu>
      </Container>
    </FixedContainer>
  );
};
