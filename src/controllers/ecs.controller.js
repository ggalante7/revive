const ecsService = require("../services/ecs.service");

async function POST(req){

    const { action, params } = req.body;

    const allowedActions = [ "listContainer", "stop", "describe" ];

    if (!allowedActions.includes(action)) 
        return { 
            statusCode: 400, 
            body: "Action não permitida"
        }

    try {
        const result = await ecsService[action](params);

        return { 
            statusCode: 200, 
            body: JSON.stringify(result)
        }
    } catch (error) {
        return { 
            statusCode: 400, 
            body: error.message 
        }
    } 
}

module.exports = {
    POST
}