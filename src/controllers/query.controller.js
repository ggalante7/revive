const queryService = require("../services/query.service");

async function POST(req) {

    try {
        const result = await queryService.execute(req.body);

        return { 
            statusCode: 200, 
            body: JSON.stringify(result)
        };
    } catch (error) {
        return { 
            statusCode: 400, 
            body: error.message
        };
    }
}

module.exports = {
    POST
}