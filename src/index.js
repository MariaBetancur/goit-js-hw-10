import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
//peticion HTTP
const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const errorElement = document.querySelector('.error');
breedSelect.classList.add('hidden');
loader.classList.remove('hidden');
fetchBreeds()
  .then(breeds => {
    breedSelect.classList.remove('hidden');
    loader.classList.add('hidden');
    console.log(breeds);
    const options = [];
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      options.push(option);
    });
    breedSelect.append(...options);
  })
  .catch(error => {
    console.error('Error:', error);
    errorElement.classList.remove('hidden');
  });

breedSelect.addEventListener('change', e => {
  const selectedOption = e.target.value;
  if (selectedOption) {
    loader.classList.remove('hidden');
    fetchCatByBreed(selectedOption)
      .then(catData => {
        loader.classList.add('hidden');
        console.log(catData);
        //const cat = catData.breeds[0];
        const cat = catData.breeds.length > 0 ? catData.breeds[0] : null;
        catInfoEl.innerHTML = `
      <div>
        <img src=${catData.url} alt=${cat.name} />
        <h3>${cat.name}</h3>
        <p>${cat.description}</p>
      </div>`;
        //loader.classList.add('hidden');
        catInfoEl.classList.remove('hidden');
      })
      .catch(error => {
        console.error('Error:', error);
        errorElement.classList.remove('hidden');
      });
  }
});
