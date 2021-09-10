import { useAppSelector } from '../../../store/types';
import Image from 'next/image';
import Heading from '../../ui/heading';
import styles from './index.module.scss';

const OtherPhotos: React.FC = () => {
  const catImages = useAppSelector((state) => state.singleCat.images);

  return (
    <section className={styles.grid}>
      <Heading type="h2">Other photos</Heading>
      {catImages?.map((url) => (
        <Image
          key={Math.random()}
          src={url}
          width="280"
          height="280"
          className={styles.img}
        />
      ))}
    </section>
  );
};
export default OtherPhotos;
