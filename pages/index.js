import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { abi } from "../constants/abi";
import { useMoralis, useWeb3Contract } from "react-moralis"; // really similar syntax to web3react
//now similar to web3react we have some "hooks" we can use with Moralis (nice name)

export default function Home() {
  const { enableWeb3, isWeb3Enabled } = useMoralis(); //such similar syntax

  //for the connect() function:
  //and we dont even need to do a connect() function, we can just add enableWeb3() directly in the html to connect the wallet instead of connect(), awesome!!
  //this one seems nice

  //for the execute() function:
  //moralis also has some hooks for executing smart contract functions, that uses the hook called "useWeb3Contract" that we imported.
  //there's a bunch of other stuff we can use besides runContractFunction
  //this abi, contractAddress, functionName and params are things you always have to fill when using this useWeb3Contract?
  //now instead of creating an execute() function, we add this in the html just like we did with the connect() function
  //even easier like this. but seems to automatic, i liked the web3react one more I think, using ethers etc. Lets see

  //this is the setup Patrick highly recommends people look into and look into using because it just makes life so much easier.
  //He has used Moralis for a number of projects its fantastic!

  const { runContractFunction } = useWeb3Contract({
    abi: abi,
    contractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    functionName: "store",
    params: {
      _favoriteNumber: 42,
    },
  });

  return (
    <div>
      {isWeb3Enabled ? (
        <>
          "Connected! "
          <button onClick={() => runContractFunction()}>Execute</button>
        </>
      ) : (
        <button onClick={() => enableWeb3()}>Connect</button>
      )}
    </div>
  );
}

//https://github.com/ethereum-boilerplate/ethereum-boilerplate
//Patrick highly recommended to look into this repo if we're gonna use Moralis. Incredible repo for Moralis + Nextjs with a ton of stuff that Patrick recommends a lot ("with a ton of this stuff already built in that we can go and check it out, 56:40).

//https://github.com/MoralisWeb3/react-moralis
//Oficial github aswell to learn how to do stuff
