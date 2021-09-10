import { AxiosResponse } from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
// import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import SingleCat from '../../components/SingleCat';
import { groupKittyData } from '../../lib/back-utilities';
import { catApi } from '../../lib/services';
import { singleCatActions } from '../../store/slices/singleCatSlice';
import { useAppDispatch } from '../../store/types';

interface SingleCatProps {
  id: string;
  name: string;
  origin: string;
  temperament: string;
  description: string;
  life_span: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  grooming: number;
  intelligence: number;
  health_issues: number;
  social_needs: number;
  stranger_friendly: number;
  wikipedia_url: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
}

interface SingleCatReturn {
  id: string;
  name: string;
  origin: string;
  lifeSpan: string;
  description: string;
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

const CatIdPage: React.FC<{ data: SingleCatReturn }> = ({ data }) => {
  // const { isFallback } = useRouter();

  // console.log(isFallback);
  // if (isFallback)
  //   return (
  //     <p style={{ textAlign: 'center', marginTop: '100px' }}>Loading...</p>
  //   );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(singleCatActions.setCat(data));
  }, []);

  return <SingleCat />;
};
export default CatIdPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const cat: AxiosResponse<SingleCatProps[]> = await catApi.get(
    `breeds/search?q=${params.catId}`,
    {
      headers: {
        'x-api-key': 'dec74740-77ab-4562-817d-2d0456e1a1aa',
      },
    }
  );

  const [kitty] = cat.data.map((value) => groupKittyData(value));

  const images: AxiosResponse<{ url: string }[]> = await catApi.get(
    `images/search?limit=15&breed_id=${kitty.id}`,
    {
      headers: {
        'x-api-key': 'dec74740-77ab-4562-817d-2d0456e1a1aa',
      },
    }
  );

  // const fullyCat = images.data.filter((url) => url).slice(0, 9);

  const fullyCat = images.data.reduce((arr, value) => {
    if (!value.url || arr.length === 9) return arr;

    return [...arr, value.url];
  }, []);

  const singleCatData = {
    ...kitty,
    profileImage: fullyCat[0],
    images: [...fullyCat.slice(1)],
  };

  // console.log(images.data[0]);

  // images.data

  /*   
  : number;
  : number;
  : number;
  wikipedia_url: string;
  : string;
  : string; */

  return {
    props: {
      data: singleCatData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

// <div>
// <div>
//   <div>
//     <Image
//       src="https://cdn2.thecatapi.com/images/1tq.png"
//       width="400"
//       height="400"
//     />
//   </div>

//   <div>
//     <div>
//       <h1>Bengal</h1>
//       <p>
//        Bengals are a lot of fun to live with, but they're definitely not
//         the cat for everyone, or for first-time cat owners. Extremely
//         intelligent, curious and active, they demand a lot of interaction
//       and woe betide the owner who doesn't provide it.
//       </p>
//       <div>
//         <span>Temperament: </span>
//         <span>Alert, Agile, Energetic, Demanding, Intelligent</span>
//       </div>
//       <div>
//         <span>Origin: </span>
//         <span>United States</span>
//       </div>
//       <div>
//         <span>Life Span: </span>
//         <span>12 - 15 years</span>
//       </div>
//     </div>

//     <div>
//       <div>
//         <div>
//           <span>Adaptability: </span>
//           <div>
//             <span />
//             <span />
//             <span />
//             <span />
//             <span />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
