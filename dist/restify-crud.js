"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const server = restify.createServer();
/*Configurações para permitir envio de Post e aceitação de
query na URL */
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
const timesDeFutebol = {
    1: { name: "São Paulo", estado: "São Paulo",
        cores: "Vermelho, Preto, Branco" },
    2: { name: "Palmeira", estado: "São Paulo",
        cores: "Verde e Branco" },
};
let timesCount = 1;
server.get('/times', (req, resp, next) => {
    resp.json(timesDeFutebol);
    return next();
});
server.get('/times/:id', (req, resp, next) => {
    resp.json(timesDeFutebol[req.params.id]);
    return next();
});
server.post('/times', (req, resp, next) => {
    let time = req.body;
    timesCount++;
    time.id = timesCount;
    timesDeFutebol[time.id] = time;
    resp.json(timesDeFutebol);
    return next();
});
server.put('/times/:id', (req, resp, next) => {
    const time = timesDeFutebol[parseInt(req.params.id)];
    const update = req.body;
    for (let field in update) {
        time[field] = update[field];
    }
    resp.json(time);
    return next();
});
server.del('/times/:id', (req, resp, next) => {
    delete timesDeFutebol[parseInt(req.params.id)];
    resp.writeHead(200);
    resp.end(JSON.stringify(true));
    return next();
});
server.listen(3000, () => {
    console.log("O servidor está funcionando corretamente");
});
