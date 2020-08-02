import { useState } from 'react';

function useForm(valoresIniciais) {
  const [formValues, setFormValues] = useState(valoresIniciais);

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

  function clearForm() {
    setFormValues(valoresIniciais);
  }

  return {
    formValues,
    handleInputChange,
    clearForm,
  };
}

export default useForm;
