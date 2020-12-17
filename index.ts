require('isomorphic-fetch');

const url = 'https://swapi.dev/api/films';

const fetchData = async () => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  return data;
};

fetchData();
