import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import ButtonLink from '../ButtonLink';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logo} alt="Valorantflix Logo" ></img>
            </Link>

            <ButtonLink href="/cadastro/video" className="ButtonLink">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;