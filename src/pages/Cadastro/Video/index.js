import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../Components/FormField';
import Button from '../../../Components/Button';
import videosRepository from '../../../repositories/video';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const { handleInputChange, formValues } = useForm({
    categoria: '',
    titulo: '',
    url: '',
  });

  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        const categoriaEscolhida = categorias.find(
          (categoria) => categoria.titulo === formValues.categoria,
        );

        console.log(categoriaEscolhida);

        videosRepository.create({
          categoriaId: 1,
          titulo: formValues.titulo,
          url: formValues.url,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Titulo do Vídeo: "
          type="text"
          name="titulo"
          value={formValues.titulo}
          onChange={handleInputChange}
        />

        <FormField
          label="URL do Vídeo: "
          type="text"
          name="url"
          value={formValues.url}
          onChange={handleInputChange}
        />

        <FormField
          label="Categoria do Vídeo: "
          type="text"
          name="categoria"
          value={formValues.categoria}
          onChange={handleInputChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
