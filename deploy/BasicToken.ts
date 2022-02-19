import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { ethers } from "hardhat";

const func: DeployFunction = async function ({
  deployments,
  getNamedAccounts,
}: HardhatRuntimeEnvironment) {
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  await deploy("BasicToken", {
    from: deployer,
    args: ["TEST TOKEN", "TEST", ethers.utils.parseEther("100000000000")],
    log: true,
  });
};
export default func;
func.tags = ["BasicToken"];
