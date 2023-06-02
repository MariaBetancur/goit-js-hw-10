//peticion HTTP
const breedselect = document.querySelector('#breed-select');
fetch('https://api.thecatapi.com/v1/breeds')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
//coleccion de razas
import { fetchBreeds } from './cat-api.js';

fetchBreeds()
  .then(breeds => {
    console.log(breeds);
  })
  .catch(error => {
    console.error('Error:', error);
  });
//info gato
const catinfo = document.querySelector('#cat-info');
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
// cat-api.js
export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds').then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${breedId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })
    .then(data => data[0].breeds[0]); // Devolver solo los datos de la raza
}
