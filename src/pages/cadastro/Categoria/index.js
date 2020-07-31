import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';

function useForm(valueInit) {

    const [categorias, setCategorias] = useState([])
    const [dataForm, setDataForm] = useState(valueInit);


    function handleChange(key, newValue) {
        console.log("atualizou")
        setDataForm({
            ...dataForm,
            [key]: newValue
        });
    }

    function handleRegister(e) {
        e.preventDefault();
        setCategorias([
            ...categorias,
            dataForm
        ]);
        setDataForm({
            title: "",
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

    return { handleChange, handleRegister, handleDelete, setCategorias, setDataForm, dataForm, categorias }

}


function CadastroCategoria() {

    const valueInit = {
        title: "",
        description: "",
        color: "#000"
    }
    const { handleChange, handleRegister, handleDelete, setCategorias, dataForm, categorias } = useForm(valueInit);

    useEffect(() => {

        let URL = 'http://localhost:3333/categorias/';
        fetch(URL)
            .then(async (dataServer) => {
                const resposta = await dataServer.json();
                console.log(resposta)
                setCategorias([
                    ...resposta,
                ]);
            });
    }, [])

    return (
        <>
            <PageDefault>
                <h1>Cadastro de Categoria:  {dataForm.title}</h1>

                <form onSubmit={handleRegister}>

                    <FormField
                        as="input"
                        label="Nome da Categoria"
                        type="text"
                        value={dataForm.title}
                        onChange={(event) => {
                            handleChange('title', event.target.value);
                        }}
                    />

                    <FormField
                        as="textarea"
                        label="Descrição"
                        type="text"
                        value={dataForm.description}

                        onChange={(event) => {
                            handleChange('description', event.target.value);
                        }}
                    />

                    <FormField
                        as="input"
                        label="Cor"
                        type="color"
                        value={dataForm.color}
                        onChange={(event) => {
                            handleChange('color', event.target.value);
                        }}
                    />

                    <ul>
                        {categorias.map((value, indice) => {
                            return <li key={value.id}>{value.title} | {value.description} | {value.color} <span> | <Button as="a" style={{ "padding": "5px 24px" }} onClick={(e) => { handleDelete(e, value.id) }}>remover</Button></span></li>
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