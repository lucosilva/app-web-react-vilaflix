import React from 'react';

function ButtonLink(props) {
    return (
        <a href="/" className={props.className} href={props.href}>
            {props.children}
        </a>
    )
}

export default ButtonLink;