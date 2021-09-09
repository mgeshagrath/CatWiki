import { createSlice } from '@reduxjs/toolkit';

interface Cats {
  cats: {
    name: string;
    id: string;
    image: {
      url: string;
    };
  }[];
}

const initialState: Cats = {
  cats: [],
};

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    setCats(state, action) {
      state.cats = action.payload;
    },
    clearCats(state) {
      state.cats = [];
    },
  },
});

export const catsActions = catsSlice.actions;
export default catsSlice;
