import {_marvelSuperHeroesHandler} from './_marvelSuperHeroesHandler';
import {getMarvelSuperHeroes} from './_marvelSuperHeroesSlice';

const {all, takeLatest} = require('redux-saga/effects');

function* _marveSuperHeroesSaga() {
  yield all([takeLatest(getMarvelSuperHeroes.type, _marvelSuperHeroesHandler)]);
}

export default _marveSuperHeroesSaga;
