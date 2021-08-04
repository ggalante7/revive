const accessController = require("./controllers/access.controller");

const { parseReq } = require("./helpers/utils");

const queryController = require("./controllers/query.controller");
const ecsController = require("./controllers/ecs.controller");
const ec2Controller = require("./controllers/ec2.controller");

async function router(req) {
    req = parseReq(req);

    const { route, method  } = req;

    const routes = {
        query: queryController,
        ecs: ecsController,
        ec2: ec2Controller
    }

    const accessResult = accessController.All(req);

    if (accessResult.error) return accessResult.error;

    try {
        return await routes[route][method](req);
    } catch (error) {
        if (error.message.includes("is not a function")) return { statusCode: 403, body: "Método não implementado" }

        return { statusCode: 500, body: "Internal Server Error" }
    }
}

module.exports = {
    router
}