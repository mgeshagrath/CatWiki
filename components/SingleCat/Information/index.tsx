import Stats from "../Stats";
import Description from "./Description";
import styles from "./index.module.scss";

const Information: React.FC = () => {
  return (
    <article className={`${styles.information} flex-column`}>
      <Description />
      <Stats />
    </article>
  );
};
export default Information;
