import * as restify from 'restify';
import {Users} from './users/users';
import {Livro} from './livros/livros';

//Configurações do servidor
const server = restify.createServer({
    name:'api-teste',
    version:'1.0.0'
});
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())


//restify.plugins.bodyParser();
//Configurações da rota OI
/* server.use(restify.plugins.bodyParser({mapParams:true})); */
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

server.del('/livros/:id',(req,resp,next)=>{
    Livro.deleteById(req.params.id).then((result)=>{
        resp.json(result);
        return next();
    })
})

server.post('/livros',(req,resp,next)=>{       
  /*  const name = req.params; */
  /*   resp.json({message:name}); */
    const obj = req.params;
    Livro.add(obj).then((res)=>{
        resp.json(res);
    })
    return next();
})
server.put('/livros/:id',(req,resp,next)=>{
    const id = req.params.id;
    const newData = req.body;
    Livro.edit(id,newData).then((res)=>{
        resp.json(res);
    })
})
//Configurações do serviço do servidor
server.listen(3000,()=>{
    console.log("O serviço está ativo");
})





