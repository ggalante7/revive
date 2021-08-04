const AWS = require("aws-sdk");
const EC2 = new AWS.EC2;

async function start(params) {
    try {
        const result = await EC2.startInstances(params).promise();

        return result;
    } catch (error) {
        throw error;
    }
}

async function stop(params) {
    try {
        const result = await EC2.stopInstances(params).promise();

        return result;
    } catch (error) {
        throw error;
    }
}

async function reboot(params) {
    try {
        const result = await EC2.rebootInstances(params).promise();

        return result;
    } catch (error) {
        throw error;
    }
}

async function describe(params) {
    try {
        const result = await EC2.describeInstances(params).promise();

        return result;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    start,
    stop,
    reboot,
    describe
}