import {put, SagaReturnType, call} from 'redux-saga/effects';
import _searchRepositoryRequest from './_marvelSuperHeroesRequest';
import {setMarvelSuperHeroes} from './_marvelSuperHeroesSlice';
import _marvelSuperHeroesRequest from './_marvelSuperHeroesRequest';
type marvelSuperHeroesRepositoryGet = SagaReturnType<
  typeof _marvelSuperHeroesRequest
>;

export function* _marvelSuperHeroesHandler() {
  const message = '/all.json';
  try {
    const responseApi: marvelSuperHeroesRepositoryGet = yield call(
      _searchRepositoryRequest,
      message,
    );
    const {data} = responseApi;

    yield put(setMarvelSuperHeroes({data}));
  } catch (error) {
    console.log('error sagas, error', error);
  }
}
