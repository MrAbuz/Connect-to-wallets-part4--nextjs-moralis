4th way to connect our smart contracts to Metamask: Using next.js + Moralis.

Following from "https://www.youtube.com/watch?v=pdsYCkUWrgQ"

A lot of aplications have some centralized components where they connect to a database in order to store some info, without requiring us to do a transaction for everything.
For example in Open Sea, we can put a "like" in the nfts and it will pop up the wallet asking for us to sign it, but it doesn't create a transaction = it doesnt save that
signature/ that data, in the blockchain. That actually gets stored in a centralized database, where the data is linked to our signature.
And this type of funcionalities can make our dapps a lot more feature rich.

Moralis has a react package aswell that allows us to have the functionality of Web3react to deal with the provider and the connection to the wallet, but also gives us the option of having a server that runs all of our aplications if we want it.

(add the steps of install, use etc)
