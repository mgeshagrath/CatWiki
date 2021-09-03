import { Fragment } from 'react';
import CatGrid from '../../components/CatData/CatGrid';
import CatStats from '../../components/CatData/CatStats';

const CatIdPage: React.FC = () => {
  return (
    <Fragment>
      <CatStats />
      <CatGrid />
    </Fragment>
  );
};
export default CatIdPage;

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
