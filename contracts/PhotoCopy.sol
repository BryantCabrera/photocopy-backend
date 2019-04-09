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

    struct Task {
        //uint is a datatype that is an unassigned integer that can't be negative
        uint id;
        string content;
        bool completed; //state of item
    }

    //puts these tasks in storage on blockchain
    //creates new var with mapping datatype
        //mapping datatype ~hash where you store a key value pair (datatype => TheTaskNameFromStruct)
    mapping(uint => Task) public tasks;

    //creates TaskCreated event inside of solidity and is available to us in this smart contract
    event TaskCreated(
        uint id,
        string content,
        bool completed
    );

    //adds some tasks to list when smart contract is deployed
        //called everytime this smart contract is run for the 1st time (upon deployment)
        //this is default task
    constructor ()  public {
        createTask('Thank you for using PhotoCopy');
    }

    //creates tasks based on content defined in struct
    //want to call this function externally from the frontend
    function createTask(string memory _content) public {
        //need to determine id of task we're going to create

        //increments taskCount
        taskCount ++;

        //you put false as 3rd parameter because it is not completed yet
        tasks[taskCount] = Task(taskCount, _content, false);

        //false because it's a new task and we haven't completed it yet
        emit TaskCreated(taskCount, _content, false);
    }
}