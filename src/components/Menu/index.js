import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/contrata-eu.png';
import { LogoImage, MenuWrapper } from './style.js';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage className="Logo" src={Logo} alt="Contrata-eu Logo" />
      </Link>

      <Button as={Link} className="" to="/cadastro/video">
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
