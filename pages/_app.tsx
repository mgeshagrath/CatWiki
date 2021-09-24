import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import store from "../store/store";
import "../styles/global.scss";
import "../styles/styles.scss";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
};

export default App;

// fill="none"
