import React from 'react'
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

function Page404() {
    return (
        <>
            <PageDefault>
                <h1>Pagina Não Encontrada!!</h1>
                <p>Volte para a home</p>
                <Link to="/">
                    ir para Home
                </Link>
            </PageDefault>
        </>
    );
}

export default Page404;