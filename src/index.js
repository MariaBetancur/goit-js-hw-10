import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
//peticion HTTP
const breedSelect = document.querySelector('#breed-select');
const catInfo = document.querySelector('#cat-info');
const loader = document.querySelector('.loader');
const errorElement = document.querySelector('.error');
fetchBreeds()
  .then(breeds => {
    console.log(breeds);
  })
  .catch(error => {
    console.error('Error:', error);
  });

fetch('https://api.thecatapi.com/v1/breeds')
  .then(response => {
    loader.style.display = 'block'; // Mostrar el cargador
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
    loader.style.display = 'none';
  })
  .catch(error => {
    console.error('Error:', error);
  });
