import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import Navigation from '../components/navigation';
import '../styles/styles.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Navigation />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
