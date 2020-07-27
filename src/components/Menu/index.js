import React from 'react';
import Logo from '../../assets/logo.png';
import './style.css';
import ButtonLink from './components/index';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo" />
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink>

            {/* <Button as="a" href="/">
                Novo video 2
            </Button> */}
        </nav>
    )
}


export default Menu;