function parseReq (req) {
    req.body = typeof req.body == "string" ? JSON.parse(req.body) : req.body;
    req.method = req.httpMethod;
    req.route = req.path.split("/")[0];

    return req;
}

module.exports = {
    parseReq
}