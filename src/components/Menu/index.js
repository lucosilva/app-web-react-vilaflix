import React from 'react';
import Logo from '../../assets/logo.png';
import './style.css';
import ButtonLink from './components/index';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo" />
            </Link>
            <ButtonLink classe="ButtonLink" link="/cadastro/video">
                Novo vídeo
            </ButtonLink>

            {/* <Button as="Link" href="/">
                Novo video 2
            </Button> */}
        </nav>
    )
}


export default Menu;