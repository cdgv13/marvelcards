import {all, fork} from 'redux-saga/effects';
import _marveSuperHeroesSaga from './marvelSuperHeroes/_marvelSuperHeroesSaga';

export function* watcherSaga() {
  yield all([fork(_marveSuperHeroesSaga)]);
}
