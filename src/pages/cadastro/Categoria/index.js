import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../components/hooks/useForm';
import categoriaRepository from '../../../repositories/categorias';

function CadastroCategoria() {
    const history = useHistory();

    const valueInit = {
        titulo: "",
        descricao: "",
        cor: "#000"
    }
    const { handleChange, handleRegister , getDataForm} = useForm(valueInit);

    return (
        <>
            <PageDefault>
                <h1>Cadastro de Categoria:  {getDataForm().title}</h1>

                <form onSubmit={(e)=>{
                    e.preventDefault();
                    handleRegister(categoriaRepository.create);
                    history.push('/cadastro/video');
                }}>
                    
                    <FormField
                        as="input"
                        label="Nome da Categoria"
                        type="text"
                        value={getDataForm().titulo}
                        onChange={(event) => {
                            handleChange('titulo', event.target.value);
                        }}
                    />

                    <FormField
                        as="textarea"
                        label="Descrição"
                        type="text"
                        value={getDataForm().descricao}

                        onChange={(event) => {
                            handleChange('descricao', event.target.value);
                        }}
                    />

                    <FormField
                        as="input"
                        label="Cor"
                        type="color"
                        value={getDataForm().cor}
                        onChange={(event) => {
                            handleChange('cor', event.target.value);
                        }}
                    />
{/* 
                    <ul>
                        {categorias.map((value, indice) => {
                            return <li key={value.id}>{value.title} | {value.description} | {value.color}</li>
                        })}
                    </ul> */}

                    <Button>
                        Cadastrar
                    </Button>
                </form>

                <Link to="/">
                    ir para home
                </Link>
            </PageDefault>
        </>
    );
}

export default CadastroCategoria;