import {createSlice} from '@reduxjs/toolkit';
import {saveSuperHeroType} from './_saveSuperHeroType';

const initialState: saveSuperHeroType = {
  saveArr: [],
  loading: true,
};

export const _saveSuperHeroSlice = createSlice({
  name: 'saveSuperHeroes',
  initialState,
  reducers: {
    getSaveSuperHero() {},
    setSaveSuperHero(state, action) {
      const response = action.payload;
      state.saveArr = response;
      state.loading = false;
    },
  },
});

export const {getSaveSuperHero, setSaveSuperHero} = _saveSuperHeroSlice.actions;

export default _saveSuperHeroSlice.reducer;
