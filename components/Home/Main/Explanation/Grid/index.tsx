import Image from "next/image";
import styles from "./index.module.scss";

const CatGrid: React.FC = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.image1}>
        <Image src="/images/grid/image-1.png" width="275" height="170" />
      </div>

      <div className={styles.image2}>
        <Image src="/images/grid/image-2.png" width="240" height="390" />
      </div>
      <div className={styles.image3}>
        <Image src="/images/grid/image-3.png" width="200" height="300" />
      </div>
    </div>
  );
};
export default CatGrid;
