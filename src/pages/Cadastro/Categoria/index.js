import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';
import FormField from '../../../Components/FormField';
import Button from '../../../Components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const [categorias, setCategorias] = useState([{ nome: 'Teste' }]);
  const [formValues, setFormValues] = useState(valoresIniciais);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, formValues]);
    setFormValues(valoresIniciais);
  }

  function setValue(chave, valor) {
    setFormValues({
      ...formValues,
      [chave]: valor,
    });
  }

  function handleInputChange(e) {
    // const { getAttribute, value } = e.target;
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
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
        {formValues.nome}
      </h1>

      <form onSubmit={handleSubmit} style={{ background: formValues.cor, borderRadius: '10px' }}>
        <FormField
          label="Nome da Categoria: "
          type="text"
          name="nome"
          value={formValues.nome}
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
          <li key={`${categoria.nome}`}>
            {categoria.nome}
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