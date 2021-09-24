import { BARS_UNFILLED } from "../../../../lib/CONSTANTS";
import Bar from "../Bar";
import styles from "./index.module.scss";

interface StatsItemProps {
  data: {
    quality: string;
    score: number;
  };
}

const StatsItem: React.FC<StatsItemProps> = ({ data }) => {
  const { quality, score } = data;

  const barsMarkup = BARS_UNFILLED.map((_, i) => (
    <Bar key={Math.random()} on={i + 1 <= score && true} />
  ));

  return (
    <div className={`${styles.stats} flex-between`}>
      <span className="bold capitalize">{`${quality}: `}</span>
      <div>{barsMarkup}</div>
    </div>
  );
};
export default StatsItem;
