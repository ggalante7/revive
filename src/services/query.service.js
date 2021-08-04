const MySQL = require("../helpers/mysql");

async function execute(body) {
    const { host, credentials, database, queries } = body;

    let user;
    let pass;
    let mysqlconn;
    let results = [];

    try {
        credentials = Buffer.from(credentials, 'base64').toString('ascii');
        credentials = credentials.split(":");

        if (credentials.length != 2) 
            throw new Error("Credenciais inválidas");
            
        
        user = credentials[0];
        pass = credentials[1];
    } catch (error) {
        throw new Error("Credenciais invalidas");
    }

    try {
        mysqlconn = await MySQL.connect(host, user, pass, database);
    } catch (error) {
        throw new Error(`Conexão com o banco falhou com a mensagem: ${error.message}`);
    }

    try {
        for(let query of queries) {
            let [rows, fields] = await mysqlconn.execute(query)
            results.push([rows, fields]);
        }

        await mysqlconn.end();

        return results;
    } catch (error) {
        throw new Error(`Execução da query falhou com a mensagem: ${error.message}`);
    }
}

module.exports = {
    execute
}