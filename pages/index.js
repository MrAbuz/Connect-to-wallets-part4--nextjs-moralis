import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useMoralis, useWeb3Contract } from "react-moralis"; //similar syntax to web3react

//now similar to web3react we have some "hooks" we can use with Moralis (nice name)

export default function Home() {
  const { enableWeb3, isWeb3Enabled } = useMoralis(); //such similar syntax

  //and we dont even need to do a connect() function, we can just add enableWeb3() directly in the html instead of connect(), awesome!!
  return (
    <div>
      {isWeb3Enabled ? (
        <>
          "Connected! "<button onClick={() => execute()}>Execute</button>
        </>
      ) : (
        <button onClick={() => enableWeb3()}>Connect</button>
      )}
    </div>
  );
}
