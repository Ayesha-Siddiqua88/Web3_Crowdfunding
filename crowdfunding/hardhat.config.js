require("@nomiclabs/hardhat-waffle");
require("dotenv").config({psth:'./.env.local'})

task("accounts","prints list of accounts", async(taskArgs,hre)=>{
  const accounts=await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account.address);
  }
})

const privateKey=process.env.NEXT_PUBLIC_PRIVATE_KEY


module.exports = {
  solidity: "0.8.10",
  defaultNetwork:"polygon",
  networks:{
    hardhat:{},
    polygin:{
      url: process.env.NXT_PUBLIC_RPC_URL,
      accounts:[privateKey]
    }
  }
};
