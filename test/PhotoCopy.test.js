const PhotoCopy = artifacts.require('../contracts/PhotoCopy.sol');

//all accounts from Ganache will be injected into accounts parameter
contract ('PhotoCopy', (accounts) => {
    //get copy of deployed contract with a before hook everytime test runs
    before(async () => {
        this.photoCopy = await PhotoCopy.deployed();
    });

    //makes sure that the address exists (not empty)
    it('deploys successfully', async () => {
        const address = await this.photoCopy.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    });

    //makes sure it lists tasks, 
    it('lists tasks', async () => {
        //makes sure we can fetch a task by the taskCount
        const taskCount = await this.photoCopy.taskCount()

        //makes sure we can fetch a task out of the mapping
        const task = await this.photoCopy.tasks(taskCount)
        assert.equal(task.id.toNumber(), taskCount.toNumber())
        assert.equal(task.content, 'Thank you for using PhotoCopy')
        assert.equal(task.completed, false)
        assert.equal(taskCount.toNumber(), 1)
    });
});