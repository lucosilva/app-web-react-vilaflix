/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../components/hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriaRepository from '../../../repositories/categorias';
import data from '../../../data/db.json';

function cadastroVideo() {

    const history = useHistory();
    const valueInit = {
        id: 0,
        titulo: '',
        url: '',
        categoria: '',
        categoriaId: 0
    }
    const { handleChange, handleRegister, getDataForm } = useForm(valueInit);

    return (
        <>
            <PageDefault>
                <h1>Cadastro de video</h1>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleRegister(videosRepository.create);
                    history.push('/');
                }}>

                    <FormField
                        as="input"
                        label="Titulo do video"
                        type="text"
                        value={getDataForm().titulo}
                        onChange={(event) => {
                            handleChange('titulo', event.target.value);
                        }}
                    />
                    <FormField
                        as="input"
                        label="URL do video"
                        type="text"
                        value={getDataForm().url}
                        onChange={(event) => {
                            handleChange('url', event.target.value);
                        }}
                    />
                    <FormField
                        as="input"
                        label="Categoria do video"
                        type="text"
                        value={getDataForm().categoria}
                        onChange={(event) => {
                            handleChange('categoria', event.target.value);
                        }}
                    />
                    <FormField
                        as="input"
                        label="id da categoria"
                        type="number"
                        value={getDataForm().categoriaId}
                        onChange={(event) => {
                            handleChange('categoriaId', parseInt(event.target.value));
                        }}
                    />

                    <Button>
                        Cadastrar
                    </Button>
                </form>


                <Link to="/cadastro/categoria">
                    Cadastro Categoria
                </Link>
            </PageDefault>
        </>
    );
}

export default cadastroVideo;