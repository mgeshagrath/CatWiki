import ListItem from '../../../../ui/ListItem';
import styles from './index.module.scss';

interface Kitties {
  id: string;
  name: string;
}

interface ResultsProps {
  kitties: Kitties[];
  loading: boolean;
}

const Results: React.FC<ResultsProps> = ({ kitties, loading }) => {
  const resultsMarkup = kitties.map((item) => (
    <ListItem key={item.id} path={item.name}>
      {item.name}
    </ListItem>
  ));

  return (
    <ul className={styles.results}>
      {loading && <li>Loading...</li>}
      {!loading && resultsMarkup}
    </ul>
  );
};
export default Results;
