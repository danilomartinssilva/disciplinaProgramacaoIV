const exemplares = [
    {name:"Java - Aprenda em 21 dias",genero:"Tecnico",
    preco:30.99, isbn:'5a59w909'},
    {name:"PHP - Aprenda em 21 dias",genero:"Tecnico",
    preco:29.99, isbn:'5a59w909'},
    {name:"React Native",genero:"Tecnico",
    preco:30.99, isbn:'5a59w909'},
    {name:"ECMASCRIPT 8",genero:"Tecnico",
    preco:30.99, isbn:'5a59w909'}    
];


export class Livro {
    static findAll():Promise<any[]>{
        return Promise.resolve(exemplares);
    }
}