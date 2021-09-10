import { createSlice } from '@reduxjs/toolkit';

interface SingleCat {
  id: string;
  name: string;
  origin: string;
  lifeSpan: string;
  description: string;
  temperament: string;
  profileImage: string;
  stats: {
    quality: string;
    score: number;
  }[];
  moreDetails: {
    pageName: string;
    url: string;
  }[];
  images: string[];
}

const initialState = <SingleCat>{};

const singleCatSlice = createSlice({
  name: 'single cat',
  initialState,
  reducers: {
    setCat(_, action) {
      return { ...action.payload };
    },
  },
});

export const singleCatActions = singleCatSlice.actions;
export default singleCatSlice;
