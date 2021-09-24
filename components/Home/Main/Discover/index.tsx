import Slider from "./slider";
import styles from "./index.module.scss";
import BreedDiscover from "./info";
import Heading from "../../../UI/Heading";

const Discover: React.FC = () => {
  return (
    <section className={styles.discover}>
      <Heading type="h3">Most Searched Breeds</Heading>
      <BreedDiscover />
      <Slider />
    </section>
  );
};
export default Discover;
