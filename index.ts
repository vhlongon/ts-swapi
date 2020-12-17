require('isomorphic-fetch');

const url = 'https://swapi.dev/api/films/1';

interface Film {
  director: string;
  title: string;
  episode_id: number;
}

const logFilm = (title: string, director: string, id: number) => {
  console.log(`
  The director is: ${director}
  The title is : ${title}
  The episode id is: ${id}
  `);
  
};

const fetchData = async () => {
  const res = await fetch(url);
  const data = await res.json();
  const { title, episode_id, director } = data as Film;

  logFilm(title, director, episode_id);
};

fetchData();
