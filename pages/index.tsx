import Home from '../components/home';
// interface Kitties {
//   id: string;
//   name: string;
//   image: {
//     url: string;
//   };
// }

// interface Props {
//   data: Kitties[] | { message: string };
// }

export const HomePage: React.FC = () => {
  return <Home />;
};

export default HomePage;

// export const getStaticProps: GetStaticProps = async () => {
//   const { data }: AxiosResponse<Kitties[]> = await catApi.get(
//     'breeds?limit=8',
//     {
//       headers: {
//         'x-api-key': 'dec74740-77ab-4562-817d-2d0456e1a1aa',
//       },
//     }
//   );

//   const kitties = data.map((kitty) => ({
//     id: kitty.id,
//     name: kitty.name,
//     image: kitty.image.url,
//   }));

//   return {
//     props: {
//       data: kitties,
//     },
//   };
// };
