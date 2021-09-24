import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = <Cat[]>[];

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    setCats(_, action: PayloadAction<CatApiResponse[]>) {
      const { payload: cats } = action;
      const cat: Cat[] = cats
        .reduce((arr, { name, image, id, description }) => {
          if (!name || !image?.url || !id || !description) return arr;

          return [
            ...arr,
            {
              catData: {
                id,
                name,
                description,
                image: image.url,
              },
              sort: Math.random(),
            },
          ];
        }, [])
        .sort((a, b) => a.sort - b.sort)
        .map(({ catData }) => catData);

      return cat;
    },
  },
});

export const catsActions = catsSlice.actions;
export default catsSlice;
