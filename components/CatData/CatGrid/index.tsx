import Image from 'next/image';
import styles from './index.module.scss';

const CatGrid: React.FC = () => {
  return (
    <div className={styles.grid}>
      <h2>Other photos</h2>
      <Image src="/queen.jpg" width="280" height="280" className={styles.img} />
      <Image src="/queen.jpg" width="280" height="280" className={styles.img} />
      <Image src="/queen.jpg" width="280" height="280" className={styles.img} />
      <Image src="/queen.jpg" width="280" height="280" className={styles.img} />
      <Image src="/queen.jpg" width="280" height="280" className={styles.img} />
      <Image src="/queen.jpg" width="280" height="280" className={styles.img} />
      <Image src="/queen.jpg" width="280" height="280" className={styles.img} />
      <Image src="/queen.jpg" width="280" height="280" className={styles.img} />
    </div>
  );
};
export default CatGrid;
