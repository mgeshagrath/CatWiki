import Bar from './Bar';
import styles from './index.module.scss';

interface ItemProps {
  data: {
    property: string;
    score: number;
  };
}

const Item: React.FC<ItemProps> = ({ data }) => {
  const { property, score } = data;

  const barMarkup = Array(5)
    .fill(0)
    .map((_, i) => <Bar key={Math.random()} on={i + 1 <= score && true} />);

  return (
    <div className={styles.stats}>
      <span>{`${property}: `}</span>
      <div>{barMarkup}</div>
    </div>
  );
};
export default Item;
