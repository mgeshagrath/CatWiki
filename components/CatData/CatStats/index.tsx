import Bar from './Bar';
import styles from './index.module.scss';

const value = 2;

const CatStats: React.FC = () => {
  const barMarkup = Array(5)
    .fill(0)
    .map((_, i) => <Bar key={Math.random()} on={i + 1 <= value && true} />);

  return (
    <div className={styles.stat}>
      <span>Adaptability: </span>
      <div className={styles.wrapper}>{barMarkup}</div>
    </div>
  );
};
export default CatStats;
