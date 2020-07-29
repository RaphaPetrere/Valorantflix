import React from 'react';
import logo from '../../assets/img/logo.png'
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={logo} style={{height : "40px"}} alt="Logo Alura" />
      </a>
      {/* <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p> */}
      <p>
        Desenvolvido por 
        {' '}
        <a href="https://github.com/RaphaPetrere">
          Raphael Cardoso Petrére
        </a>
      </p>
      <p>
        July 2020
      </p>
    </FooterBase>
  );
}

export default Footer;
