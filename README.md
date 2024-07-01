# Create a Frontend

I created this DAPP Project using Web3, Truffle, Ganache and React.



 


## Used Technologies

 - [Truffle](https://archive.trufflesuite.com/)
 - [React](https://react.dev/)
 - [Web3](https://web3.foundation/)
 - [Ganache](https://archive.trufflesuite.com/ganache/)
 - [Metamask Sepolia](https://sepolia.etherscan.io/)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Packages Required

To run this project, you will need to add and install the following packages

`Node.js`
`Truffle`
`web3`
`Ganache`
and 
`React`


## To install Node.js on your system

First download  - [Node](https://nodejs.org/en)

## To install Node.js on your system

Then in terminal, run the following commands :


```bash
  npm install -g truffle
```
Then in the project do the following:

```bash
  npx truffle init
```
To compile: 
```bash
  npx truffle compile
```
To Migrate using ganache:
```bash
  npx truffle migrate --reset
```
To Migrate using sepolia or other testnet and dont forget to download some dependencies before:
```bash
  npm install @truffle/hdwallet-provider
  npx truffle migrate --network [network name] --reset
```

## To install and run React on your system

Then in terminal, run the given commands from the link given below:

-[React (Truflle Boxes)](https://archive.trufflesuite.com/boxes/react/)

## For Web 3 just run the following command on your terminal:

```bash
  npm install web3
  ```






## Note:

At Default the program is set to ganache to run it using sepolia you have to do some changes in -[truffle-config.js](https://github.com/Shubham12138/Module-2/blob/master/truffle-config.js). You have to uncomment lines 44-47 and 85-95 and comment out lines 67-71 and 115-120. 

Make sure that your ganache is running in background while deploying the project.






## Features of the solidity Code:

I've used three fuunctions here which are going to perform the following task:

- ### function setLang(string memory st) 
    This function will initiate the language variable and check if it is same as before 

- ### function showLang()
    It will show the final language and letters on the screen
- ### function addLin(uint256 lt)

    This is to initiate the letters variable


### Check out the [Loom](https://www.loom.com/share/49684dced51f49efbdeddca7594d176a?sid=979afad9-9dfd-4813-b7e6-49c73f941f99) video for the Output Screen Preview.

