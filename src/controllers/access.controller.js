const accessService = require("../services/access.service");

function All(req) {
    const { Authorization, "x-api-key": apikey, Host } = req.headers;
    
    try {
        accessService.validate(Authorization, apikey, Host);
        return "OK";
    } catch (error) {
        return { 
            error: {
                statusCode: 401,
                body: error.message
            } 
        }
    }
    
}

module.exports = {
    All
}