import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const [categorias, setCategorias] = useState([])
    const [value, setValue] = useState({
        name: "",
        description: "",
        color: "#000"
    });

    function handleChange(key, newValue) {
        console.log("atualizou")
        setValue({
            ...value,
            [key]: newValue
        });
    }

    function handleCadastro(e) {
        e.preventDefault();
        setCategorias([
            ...categorias,
            value
        ]);
        setValue({
            name: "",
            description: "",
            color: "#000"
        });
    }
    function handleDelete(e, pos) {
        e.preventDefault();
        const listLocal = [...categorias];
        listLocal.splice(pos, 1);

        setCategorias(listLocal);
    }
    return (
        <>
            <PageDefault>
                <h1>Cadastro de Categoria:  {value.name}</h1>

                <form onSubmit={handleCadastro}>

                    <FormField
                        as="input"
                        label="Nome da Categoria"
                        type="text"
                        value={value.name}
                        onChange={(event) => {
                            handleChange('name', event.target.value);
                        }}
                    />

                    <FormField
                        as="textarea"
                        label="Descrição"
                        type="text"
                        value={value.description}

                        onChange={(event) => {
                            handleChange('description', event.target.value);
                        }}
                    />

                    <FormField
                        as="input"
                        label="Cor"
                        type="color"
                        value={value.color}
                        onChange={(event) => {
                            handleChange('color', event.target.value);
                        }}
                    />

                    <ul>
                        {categorias.map((value, indice) => {
                            return <li key={indice}>{value.name} | {value.description} | {value.color} <span> | <Button as="a" style={{ "padding": "5px 24px" }} onClick={(e) => { handleDelete(e, indice) }}>remover</Button></span></li>
                        })}
                    </ul>

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