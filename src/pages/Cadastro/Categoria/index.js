import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';
import FormField from '../../../Components/FormField';
import Button from '../../../Components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };

  const { formValues, handleInputChange, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost') ? 'http://localhost:8080/categorias' : 'https://valorantflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (response) => {
        const resposta = await response.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {formValues.titulo}
      </h1>

      <form
        onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategorias([...categorias, formValues]);
          clearForm();
        }}
        style={{ background: formValues.cor, borderRadius: '10px' }}
      >
        <FormField
          label="Nome da Categoria: "
          type="text"
          name="titulo"
          value={formValues.titulo}
          onChange={handleInputChange}
        />

        <FormField
          label="Descrição: "
          type="textarea"
          name="descricao"
          value={formValues.descricao}
          onChange={handleInputChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={formValues.cor}
          onChange={handleInputChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
