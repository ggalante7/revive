function validate(Authorization, apikey, Host) {
    try {
        if (!Authorization || !apikey || Host) throw new Error("Nao foi possivel validar o usuario");

        let credentials;

        Authorization = Authorization.replace("Basic ", "");
        
        credentials = Buffer.from(Authorization, 'base64').toString('ascii');
        credentials = credentials.split(":");

        if (credentials.length != 2) throw new Error("Usuario invalido");

        const user = Buffer.from(`${credentials[0]}F31T0`).toString('base64');
        const pass = Buffer.from(`${credentials[1]}PR4`).toString('base64');
        const ctrl = Buffer.from(`${Host}V0C3`).toString('base64');

        if (apikey == `${user}+${ctrl}0${pass}`) return { message: "sucesso"};

        throw new Error("Usuário inválido");
    } catch (error) {
        throw new Error("Não foi possível validar o usuário");
    }
}

module.exports = {
    validate
}