//requires .sol file from contracts directory
const PhotoCopy = artifacts.require("PhotoCopy");

module.exports = function(deployer) {
    //abstraction of the file that it understands to put on blockchain
    deployer.deploy(PhotoCopy);
};
