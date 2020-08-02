import config from '../config';

function getAllWithVideos() {
  return fetch(`${config.URL_BACKEND}/categorias?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();

        return resposta;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

function getAll() {
  return fetch(`${config.URL_BACKEND}/categorias`)
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();

        return resposta;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
