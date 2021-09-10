import Bar from '../Bar';
import styles from './index.module.scss';

interface StatsItemProps {
  data: {
    quality: string;
    score: number;
  };
}

const StatsItem: React.FC<StatsItemProps> = ({ data }) => {
  const { quality, score } = data;

  const barMarkup = Array(5)
    .fill(0)
    .map((_, i) => <Bar key={Math.random()} on={i + 1 <= score && true} />);

  return (
    <div className={`${styles.stats} flex-between`}>
      <span className="bold capitalize">{`${quality}: `}</span>
      <div>{barMarkup}</div>
    </div>
  );
};
export default StatsItem;
