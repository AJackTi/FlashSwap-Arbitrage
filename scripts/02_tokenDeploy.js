async function main() {
  const [owner, signer2] = await ethers.getSigners();

  let Tether = await ethers.getContractFactory("Tether", owner);
  let tether = await Tether.deploy();

  let Usdc = await ethers.getContractFactory("UsdCoin", owner);
  let usdc = await Usdc.deploy();

  await tether
    .connect(owner)
    .mint(owner.address, ethers.utils.parseEther("100000"));
  await usdc
    .connect(owner)
    .mint(owner.address, ethers.utils.parseEther("100000"));

  console.log("TETHER_ADDRESS=", `'${tether.address}'`);
  console.log("USDC_ADDRESS=", `'${usdc.address}'`);
}

/*
  npx hardhat run --network localhost scripts/02_deployTokens.js
  */

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
