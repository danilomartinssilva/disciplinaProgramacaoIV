"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const users_1 = require("./users/users");
const livros_1 = require("./livros/livros");
//Configurações do servidor
const server = restify.createServer({
    name: 'api-teste',
    version: '1.0.0'
});
//Configurações da rota OI
server.get('/oi', (req, resp, next) => {
    resp.status(400);
    resp.json({ message: "O servidor está funcionando" });
    return next();
});
//Configurações da rota INFO
server.get('/info', (req, resp, next) => {
    resp.status(200);
    resp.json({
        metodo: req.method,
        browser: req.userAgent(),
        url: req.href(),
        path: req.path(),
        query: req.query() //Retorna as querys da URL.
    });
    return next();
});
server.get('/validatebrowser', [
    (req, resp, next) => {
        if (req.userAgent() && req.userAgent().includes('Windows NT 10.0; WOW64; Trident/7.0; rv:11.0')) {
            resp.status(400);
            resp.json({ message: 'Você não está usando um navegador que presta' });
            return next(false);
        }
        return next();
    },
    (req, resp, next) => {
        resp.json({
            message: "Seu navegador é TOP!",
            metodo: req.method,
            browser: req.userAgent(),
            url: req.href(),
            path: req.path(),
            query: req.query() //Retorna as querys da URL.    
        });
        return next();
    },
]);
server.get('/users', (req, resp, next) => {
    users_1.Users.find().then((result) => {
        resp.json(result);
        return next();
    });
});
server.get('/livros', (req, resp, next) => {
    livros_1.Livro.findAll().then((resposta) => {
        resp.json(resposta);
    });
    return next();
});
//Configurações do serviço do servidor
server.listen(3000, () => {
    console.log("O serviço está ativo");
});
