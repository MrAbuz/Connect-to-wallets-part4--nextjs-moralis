import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

//we're gonna use Moralis without the api conection (just the react hooks like web3react) etc but it's really easy to do it. Patrick briefly explains how, and where to look
//at in the docs if I want to use the api, so if I start listening around 56:00 or at the beginning of this NextJS & Moralis part, i'll get good info on how to do it.
//basicaly just need to add some things instead of "initializeOnMount ={false}. https://www.youtube.com/watch?v=pdsYCkUWrgQ

function MyApp({ Component, pageProps }) {
  //"initialize on mount" means we don't want a server
  return (
    <MoralisProvider initializeOnMount={false}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
