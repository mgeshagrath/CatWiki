import { useAppSelector } from '../../store/types';
import Heading from '../ui/heading';
import Breed from './Breed';
import styles from './index.module.scss';

const BreedsList: React.FC = () => {
  const catsList = useAppSelector((state) => state.allCats);

  return (
    <div className={styles.grid}>
      <Heading type="h1">List of breeds!</Heading>
      {catsList.map((cat) => (
        <Breed key={cat.id} data={cat} />
      ))}
      {/* <Breed />
      <Breed />
      <Breed />
      <Breed />
      <Breed />
      <Breed />
      <Breed />
      <Breed />
      <Breed />
      <Breed /> */}
    </div>
  );
};
export default BreedsList;
