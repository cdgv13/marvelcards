import {createSlice} from '@reduxjs/toolkit';
import {superHeroesType} from './_marvelSuperHeroesType';

const initialState: superHeroesType = {
  superHeroesType: [
    {
      id: 0,
      name: '',
      slug: '',
      powerstats: {
        intelligence: 0,
        strength: 0,
        speed: 0,
        durability: 0,
        power: 0,
        combat: 0,
      },
      appearance: {
        gender: '',
        race: '',
        height: [''],
        weight: [''],
        eyeColor: '',
        hairColor: '',
      },
      biography: {
        fullName: '',
        alterEgos: '',
        aliases: [''],
        placeOfBirth: '',
        firstAppearance: '',
        publisher: '',
        alignment: '',
      },
      work: {
        occupation: '',
        base: '',
      },
      connections: {groupAffiliation: '', relatives: ''},
      images: {xs: '', sm: '', md: '', lg: ''},
    },
  ],
  loading: true,
};

export const _marvelSuperHeroesSlice = createSlice({
  name: 'superHeroes',
  initialState,
  reducers: {
    getMarvelSuperHeroes() {},
    setMarvelSuperHeroes(state, action) {
      const response = action.payload;
      const arrMarvel = response.data.filter(function (r: any) {
        return r.biography.publisher === 'Marvel Comics';
      });

      state.superHeroesType = arrMarvel;

      state.loading = false;
    },
  },
});

export const {getMarvelSuperHeroes, setMarvelSuperHeroes} =
  _marvelSuperHeroesSlice.actions;

export default _marvelSuperHeroesSlice.reducer;
