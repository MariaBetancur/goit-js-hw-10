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
    .then(data => data[0]);
}
