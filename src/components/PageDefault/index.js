import React from 'react'
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);    

    flex: 1;
    padding: 50px 5% 0 5%;
 `;

function PageDefault({ children }) {
    return (
        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    );
}

export default PageDefault;