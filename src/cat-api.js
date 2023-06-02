import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
fetchBreeds()
  .then(breeds => {
    console.log(breeds);
  })
  .catch(error => {
    console.error('Error:', error);
  });

const catInfo = document.querySelector('#cat-info');
breedSelect.addEventListener('change', () => {
  const breedId = breedSelect.value;
  fetchCatByBreed(breedId)
    .then(data => {
      // Mostrar información del gato en catInfo
      catInfo.innerHTML = `
        <p>Nombre de la raza: ${data.name}</p>
        <p>Descripción: ${data.description}</p>
        <p>Temperamento: ${data.temperament}</p>
        <img src="${data.image.url}" alt="Imagen del gato">
      `;
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key':
        'live_pa8j24YASXV1ikK3eqCyQAgv0HmRLxkS3O6N1JNeXgOavrwNl3JkhXMRpzI7GoM2',
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_id=${breedId}`,
    {
      headers: {
        'x-api-key':
          'live_pa8j24YASXV1ikK3eqCyQAgv0HmRLxkS3O6N1JNeXgOavrwNl3JkhXMRpzI7GoM2',
      },
    }
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })
    .then(data => data[0].breeds[0]);
}
