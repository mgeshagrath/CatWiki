import { useAppSelector } from "../../../../../store/types";
import Button from "../../../../UI/Button";
import Heading from "../../../../UI/Heading";
import styles from "./index.module.scss";

const DiscoverInfo: React.FC = () => {
  const { catsList } = useAppSelector((state) => state);
  const breedsQuantity = catsList.length;
  return (
    <div className={`${styles.info} flex-between`}>
      <Heading type="h2">{breedsQuantity}+ Breeds for you to discover!</Heading>
      <Button type="link" goTo="/breeds">
        see more
      </Button>
    </div>
  );
};
export default DiscoverInfo;
