import {combineReducers} from '@reduxjs/toolkit';
import _marvelSuperHeroesReducer from './marvelSuperHeroes/_marvelSuperHeroesSlice';
import _saveSuperHeroReducer from './saveSuperHero/_saveSuperHeroSlice';
const reducer = combineReducers({
  marvelSuperHeroes: _marvelSuperHeroesReducer,
  saveSuperHero: _saveSuperHeroReducer,
});
export type RootState = ReturnType<typeof reducer>;
export default reducer;
