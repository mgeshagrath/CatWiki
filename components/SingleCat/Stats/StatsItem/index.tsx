import Bar from '../Bar';
import styles from './index.module.scss';

interface StatsItemProps {
  data: {
    property: string;
    score: number;
  };
}

const StatsItem: React.FC<StatsItemProps> = ({ data }) => {
  const { property, score } = data;

  const barMarkup = Array(5)
    .fill(0)
    .map((_, i) => <Bar key={Math.random()} on={i + 1 <= score && true} />);

  return (
    <div className={`${styles.stats} flex-between`}>
      <span className="bold">{`${property}: `}</span>
      <div>{barMarkup}</div>
    </div>
  );
};
export default StatsItem;
