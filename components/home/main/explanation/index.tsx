import CatGrid from './grid';
import styles from './index.module.scss';
import ExplanationInfo from './info';

const Explanation: React.FC = () => {
  return (
    <section className={styles.explanation}>
      <ExplanationInfo />
      <CatGrid />
    </section>
  );
};
export default Explanation;
