import Image from 'next/image';
import Heading from '../../ui/heading';
import styles from './index.module.scss';

const OtherPhotos: React.FC = () => {
  return (
    <section className={styles.grid}>
      <Heading type="h2">Other photos</Heading>
      <Image src="/queen.jpg" width="280" height="280" className={styles.img} />
      <Image src="/queen.jpg" width="280" height="280" className={styles.img} />
      <Image src="/queen.jpg" width="280" height="280" className={styles.img} />
      <Image src="/queen.jpg" width="280" height="280" className={styles.img} />
      <Image src="/queen.jpg" width="280" height="280" className={styles.img} />
      <Image src="/queen.jpg" width="280" height="280" className={styles.img} />
      <Image src="/queen.jpg" width="280" height="280" className={styles.img} />
      <Image src="/queen.jpg" width="280" height="280" className={styles.img} />
    </section>
  );
};
export default OtherPhotos;
