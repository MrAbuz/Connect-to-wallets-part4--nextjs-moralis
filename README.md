4th way to connect our smart contracts to Metamask: Using next.js + Moralis.

Following from "https://www.youtube.com/watch?v=pdsYCkUWrgQ"

A lot of aplications have some centralized components where they connect to a database in order to store some info, without requiring us to do a transaction for everything.
For example in Open Sea, we can put a "like" in the nfts and it will pop up the wallet asking for us to sign it, but it doesn't create a transaction = it doesnt save that
signature/ that data, in the blockchain. That actually gets stored in a centralized database, where the data is linked to our signature.
And this type of funcionalities can make our dapps a lot more feature rich.

Moralis has a react package aswell that allows us to have the functionality of Web3react to deal with the provider and the connection to the wallet, but also gives us the option of having a server that runs all of our aplications if we want it.

https://github.com/ethereum-boilerplate/ethereum-boilerplate
Patrick highly recommended to look into this repo if we're gonna use Moralis. Incredible repo for Moralis + Nextjs with a ton of stuff that Patrick recommends a lot ("with a ton of this stuff already built in that we can go and check it out, 56:40).

https://github.com/MoralisWeb3/react-moralis
Oficial github aswell to learn how to do stuff

To try this repo:

```
git clone https://github.com/MrAbuz/connect-to-wallets-part4--nextjs-moralis
yarn
```

To open the project on a browser tab:

```
yarn dev
then click the url it provides (it opens a tab)
```

Then open a new terminal (a 2nd terminal), and:

```
cd ..
git clone https://github.com/MrAbuz/connect-to-wallets-part0--just-to-get-hardhat-sol-code
yarn
yarn hardhat node
```

Copy the rpc url provided in the hardhat node that you created, then go to your metamask, add a new network, and create a new network with that copied rpc url and chainid: 31337.
Then pick one private key from the ones provided in hardhat node and import it to your metamask.

With all of this you will be able to test this repo! have fun :)
