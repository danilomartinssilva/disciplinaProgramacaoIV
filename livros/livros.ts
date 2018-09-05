const exemplares = [
    {_id:1,name:"Java - Aprenda em 21 dias",genero:"Tecnico",
    preco:30.99, isbn:'5a59w909'},
    {_id:2,name:"PHP - Aprenda em 21 dias",genero:"Tecnico",
    preco:29.99, isbn:'5a59w909'},
    {_id:3,name:"React Native",genero:"Tecnico",
    preco:30.99, isbn:'5a59w909'},
    {_id:4,name:"ECMASCRIPT 8",genero:"Tecnico",
    preco:30.99, isbn:'5a59w909'}    
];


export class Livro {
    static findAll():Promise<any[]>{
        return Promise.resolve(exemplares);
    }
    static findById(id:String):Promise<any>{
        return new Promise(resolve=>{
            const filtrados = exemplares
            .filter(e=>e._id.toString()===id);//Filtra
            let exemplar = undefined;
            if(filtrados.length>0){
                exemplar = filtrados[0];//Grava na var exemplar
            }
            
            resolve(exemplar);//Resolve a promessa
        })
    }
    static deleteById(id:String):Promise<any[]>{
        exemplares.splice(Number.parseInt(id.toString())-1,1)
        return Promise.resolve(exemplares);
          
    }

    static add(ex):Promise<any[]>{
        exemplares.push(ex);
        return Promise.resolve(exemplares);
    }
    
    static edit(id:String,newData:Object):Promise<any>{
        const exemplar = exemplares[parseInt(id.toString())];
        const update = newData;
        for (let field in update){
            exemplar[field] = update[field];
        }
        return Promise.resolve(exemplar);


       
    }
    
    
}