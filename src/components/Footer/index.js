import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/contrata-eu.png';
import { LogoImage } from '../Menu/style.js';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <LogoImage src={Logo} alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a{' '}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
