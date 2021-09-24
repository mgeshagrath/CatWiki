import { useAppSelector } from "../../store/types";
import Heading from "../UI/Heading";
import SingleBreed from "./SingleBreed";
import styles from "./index.module.scss";

const BreedsList: React.FC = () => {
  const { catsList } = useAppSelector((state) => state);
  const breedsMarkup = catsList.map((cat) => (
    <SingleBreed key={cat.id} data={cat} />
  ));

  return (
    <div className={styles.grid}>
      <Heading type="h1">List of breeds!</Heading>
      {breedsMarkup}
    </div>
  );
};
export default BreedsList;
