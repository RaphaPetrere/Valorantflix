import React, { useState } from 'react';
import PageDefault from '../../../Components/PageDefault';
import FormField from '../../../Components/FormField';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: "#000",
    };
    
    const [ categorias, setCategorias ] = useState([{nome: 'Teste'}]);
    const [ formValues, setFormValues ] = useState(valoresIniciais);

    function handleSubmit(e){
        e.preventDefault();
        setCategorias([...categorias, formValues]);
        setFormValues(valoresIniciais);
    };

    function handleInputChange(e){
        // const { getAttribute, value } = e.target;
        setValue(
            e.target.getAttribute('name'),
            e.target.value
        );
    };

    function setValue(chave, valor){
        setFormValues({
            ...formValues,
            [chave]: valor,
        })
    };

   return(
       <PageDefault>
           <h1>Cadastro de Categoria: {formValues.nome}</h1>

           <form onSubmit={handleSubmit} style={{background: formValues.cor, borderRadius : "10px"}}>
                <FormField 
                    label="Nome da Categoria: "
                    type="text"
                    name="nome"
                    value={formValues.nome}
                    onChange={handleInputChange}
                />
               
               <div>
                <label>
                    Descrição: 
                        <textarea type="text"
                        name="descricao"
                        value={formValues.descricao}
                        onChange={handleInputChange}
                        />
                </label>
               </div>
               
               <FormField 
                    label="Cor: "
                    type="color"
                    name="cor"
                    value={formValues.cor}
                    onChange={handleInputChange}
                />


               <button>
                   Cadastrar
               </button>
           </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return(
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

           <Link to="/">
                Ir para home
           </Link>
       </PageDefault>
   )
}

export default CadastroCategoria;