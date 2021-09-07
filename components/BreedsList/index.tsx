import Heading from '../ui/heading';
import Breed from './Breed';
import styles from './index.module.scss';

const BreedsList: React.FC = () => {
  return (
    <div className={styles.grid}>
      <Heading type="h1">List of breeds!</Heading>
      <Breed />
      <Breed />
      <Breed />
      <Breed />
      <Breed />
      <Breed />
      <Breed />
      <Breed />
      <Breed />
      <Breed />
    </div>
  );
};
export default BreedsList;
