const AWS = require("aws-sdk");
const ECS = new AWS.ECS;

function stop(params) {
    try {
        const result = await ECS.stopTask(params).promise();

        return result;
    } catch (error) {
        throw error;
    }
    
}

function discribe(params) {
    try {
        const result = await ECS.describeTasks(params).promise();

        return result;
    } catch (error) {
        throw error;
    }
    
}

function listContainer(params) {
    try {
        const result = await ECS.listContainerInstances(params).promise();

        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    stop,
    discribe,
    listContainer
}