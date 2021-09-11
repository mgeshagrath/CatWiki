import ListItem from '../../../../ui/ListItem';
import Spinner from '../../../../ui/spinner';
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
    <ListItem key={item.id} path={`/breeds/${item.name.toLowerCase()}`}>
      {item.name}
    </ListItem>
  ));

  return (
    <ul className={styles.results}>
      {loading && <Spinner />}
      {!loading && resultsMarkup}
    </ul>
  );
};
export default Results;
