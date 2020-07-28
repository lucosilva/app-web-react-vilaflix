import React from 'react';
import { Link } from 'react-router-dom';

function ButtonLink(props) {
    return (
        <Link className={props.classe} to={props.link}>
            {props.children}
        </Link>
    )
}

export default ButtonLink;