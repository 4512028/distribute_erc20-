var TaskToken = artifacts.require("./TaskToken.sol");

module.exports = async function (deployer) {
  deployer.deploy(
    TaskToken,
    "400000000000000000000000",
    "100000000000000000000000"
  );
};
