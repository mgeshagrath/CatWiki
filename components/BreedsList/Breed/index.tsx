import Button from '../../ui/button';
// import Image from 'next/image';
import Heading from '../../ui/heading';
import styles from './index.module.scss';
import LoadedImage from '../../ui/LoadedImage';

// interface Cat {
//   data: {
//     name: string;
//     id: string;
//     image: string;
//   };
// }

const Breed: React.FC<{ data: Cat }> = ({ data }) => {
  const { name, image, description } = data;
  const imageConfig = {
    imagePath: image,
    width: '170px',
    height: '170px',
  };

  return (
    <Button goTo={`/breeds/${name.toLowerCase()}`} type="link">
      <figure className={`${styles.breed} flex-between decoration`}>
        <LoadedImage data={imageConfig} />
        {/* <div>
          <Image
            src={`${image}`}
            width="170"
            height="170"
            layout="responsive"
            objectFit="cover"
          />
        </div> */}
        <div>
          <Heading type="h2">{name}</Heading>
          <p>{description.slice(0, 120) + '...'}</p>
        </div>
      </figure>
    </Button>
  );
};
export default Breed;
