import { AxiosResponse } from 'axios';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import { catApi } from '../lib/services';
import { catsActions } from '../store/slices/catsSlice';
import { useAppDispatch } from '../store/types';
import Home from '../components/home';

// interface Kitties {
//   id: string;
//   name: string;
//   image: {
//     url: string;
//   };
// }

// interface HomeProps {
//   data: Kitties[];
// }

export const HomePage: React.FC<{ data: CatApiResponse[] }> = ({ data }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(catsActions.setCats(data));
  }, []);

  return <Home />;
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const { data }: AxiosResponse<CatApiResponse[]> = await catApi.get('breeds', {
    headers: {
      'x-api-key': 'dec74740-77ab-4562-817d-2d0456e1a1aa',
    },
  });

  // const data = response.reduce((arr, { name, image, id, description }) => {
  //   if (!name || !image?.url || !id || !description) return arr;

  //   return [
  //     ...arr,
  //     {
  //       id,
  //       name,
  //       description,
  //       image: image.url,
  //     },
  //   ];
  // }, []);
  // .sort((a, b) => a.sort - b.sort)
  // .map(({ kitty }) => kitty);
  // .slice(0, 8);

  return {
    props: {
      data,
    },
  };
};

// const kitties = data
//   .map((kitty) => ({
//     name: kitty.name,
//     image: kitty?.image?.url ?? '',
//     sort: Math.random(),
//   }))
//   .sort((a, b) => a.sort - b.sort);
// .slice(0, 8);
