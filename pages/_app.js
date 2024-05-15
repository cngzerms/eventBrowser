import "../styles/global.css";
import Home from "./index";
import Events from "./events";
import Likes from "./likes";

function MyApp({ Component, pageProps }) {
  const getComponent = () => {
    if (Component === Home) {
      return <Home {...pageProps} />;
    } else if (Component === Events) {
      return <Events {...pageProps} />;
    }else if (Component === Likes){
      return <Likes {...pageProps} />;
    }
    return <Home {...pageProps} />;
  };

  return getComponent();
}

export default MyApp;