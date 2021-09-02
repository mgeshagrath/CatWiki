import { Fragment } from 'react';
import Header from './header';
import Discover from './main/discover';
import Explanation from './main/explanation';

const Home: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Discover />
        <Explanation />
      </main>
    </Fragment>
  );
};
export default Home;
