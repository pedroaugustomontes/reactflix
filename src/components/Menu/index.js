import React from 'react';
import Logo from '../../assets/img/contrata-eu.png';
import { LogoImage, MenuWrapper } from './style.js';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <a href="/">
        <LogoImage className="Logo" src={Logo} alt="Contrata-eu Logo" />
      </a>

      <Button as="a" className="" href="/">
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
