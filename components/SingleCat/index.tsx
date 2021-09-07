import OtherPhotos from './OtherPhotos';

import styles from './index.module.scss';
import MoreDetails from './MoreDetails';
import Information from './Information';

const SingleCat: React.FC = () => {
  return (
    <main className={styles.singleCat}>
      <section className={styles.detailedInfo}>
        <MoreDetails />
        <Information />
      </section>
      <OtherPhotos />
    </main>
  );
};
export default SingleCat;
