import * as restify from 'restify';
import {Users} from './users/users';
import {Livro} from './livros/livros';

//Configurações do servidor
const server = restify.createServer({
    name:'api-teste',
    version:'1.0.0'
});
//Configurações da rota OI
server.get('/oi',(req,resp,next)=>{
    resp.status (400);
    
    resp.json({message:"O servidor está funcionando"});
    return next();
});
//Configurações da rota INFO
server.get('/info',(req,resp,next)=>{
    resp.status (200);
    resp.json({
        metodo:req.method, //Mostra o método
        browser:req.userAgent(),//Mostra o browser
        url:req.href(), // Mostra a informação da rota
        path: req.path(),//Verificar 
        query:req.query() //Retorna as querys da URL.

    });
    return next();
});

server.get('/validatebrowser',[
    (req,resp,next)=>{
        if(req.userAgent() && req.userAgent().includes('Windows NT 10.0; WOW64; Trident/7.0; rv:11.0')){
            resp.status(400);
            resp.json({message:'Você não está usando um navegador que presta'});
            return next(false);
        }
        return next();
    },
    (req,resp,next)=>{
        resp.json({
            message:"Seu navegador é TOP!",
            metodo:req.method, //Mostra o método
            browser:req.userAgent(),//Mostra o browser
            url:req.href(), // Mostra a informação da rota
            path: req.path(),//Verificar 
            query:req.query() //Retorna as querys da URL.    
        });
        return next();
    },
])

server.get('/users',(req,resp,next)=>{
    Users.find().then((result)=>{
        resp.json(result);
        return next();
    });
})
server.get('/livros',(req,resp,next)=>{
    Livro.findAll().then((resposta)=>{
        resp.json(resposta);
    })
    return next();
})

server.get('/livros/:id',(req,resp,next)=>{
    let id = req.params.id;
    Livro.findById(id).then((resposta)=>{
            if(resposta){
                resp.json(resposta);
                return next();
            }
            else{
                resp.send(400);
                return next();
            }
    })
})
//Configurações do serviço do servidor
server.listen(3000,()=>{
    console.log("O serviço está ativo");
})





