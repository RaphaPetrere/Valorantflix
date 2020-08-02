import config from '../config';

function create(objetoDoVideo) {
  return fetch(`${config.URL_BACKEND}/videos?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();

        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados');
    });
}

export default {
  create,
};
