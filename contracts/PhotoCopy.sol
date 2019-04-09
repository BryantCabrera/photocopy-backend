pragma solidity ^0.5.0;

//make sure contract name is the same as the file name
contract PhotoCopy {
    //state variables in solidity are written to the blockchain to represent the state of the smart contract on the blockchain
        //(a)	State changes anytime the taskCount changes
        //(b)	~class variables in OOP
            //(i)	Where the scope of the variable belongs to the entire smart contract, not a function
    //public lets us read the value of taskCount
    //initialize to 0
    uint public taskCount = 0;
}