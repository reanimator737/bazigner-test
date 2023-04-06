import React, { useCallback, useState } from 'react';
import { Container, FixedContainer, Line, MenuContainer, MenuItem } from './style';
import { ReactComponent as Logo } from '~/assets/logo.svg';
import { BurgerMenu } from './style';

export const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const onMenuItemClick = useCallback(() => setMenuIsOpen(false), []);

  return (
    <FixedContainer>
      <Container>
        <Logo />
        <MenuContainer className={menuIsOpen ? 'active' : ''}>
          <MenuItem href="#home" onClick={onMenuItemClick}>
            HOME
          </MenuItem>
          <MenuItem href="#features" onClick={onMenuItemClick}>
            FEATURES
          </MenuItem>
          <MenuItem href="#gallery" onClick={onMenuItemClick}>
            GALLERY
          </MenuItem>
          <MenuItem href="#video" onClick={onMenuItemClick}>
            VIDEO
          </MenuItem>
          <MenuItem href="" onClick={onMenuItemClick}>
            TESTIMONIALS
          </MenuItem>
          <MenuItem href="" onClick={onMenuItemClick}>
            DOWNLOAD
          </MenuItem>
          <MenuItem href="#contact" onClick={onMenuItemClick}>
            CONTACT
          </MenuItem>
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
