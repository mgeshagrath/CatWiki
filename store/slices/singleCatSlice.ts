import { createSlice } from '@reduxjs/toolkit';

interface SingleCat {
  id: string;
  name: string;
  origin: string;
  lifeSpan: string;
  description: string;
  stats: {
    quality: string;
    score: number;
  }[];
  moreDetails: {
    pageName: string;
    url: string;
  }[];
}

const initialState = <SingleCat>{};

const singleCatSlice = createSlice({
  name: 'single cat',
  initialState,
  reducers: {
    setCat(state, action) {
      state = { ...action.payload };
    },
  },
});

export const singleCatActions = singleCatSlice.actions;
export default singleCatSlice;
