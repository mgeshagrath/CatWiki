import { Fragment } from "react";
import Header from "./Header";
import Discover from "./Main/Discover";
import Explanation from "./Main/Explanation";

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
