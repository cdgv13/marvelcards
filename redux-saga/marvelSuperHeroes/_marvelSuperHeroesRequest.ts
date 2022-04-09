import axios from 'axios';

const _marvelSuperHeroesRequest = async (message: any) =>
  axios.get<any>(
    'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api' + message,
  );

export default _marvelSuperHeroesRequest;
