"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exemplares = [
    { _id: 1, name: "Java - Aprenda em 21 dias", genero: "Tecnico",
        preco: 30.99, isbn: '5a59w909' },
    { _id: 2, name: "PHP - Aprenda em 21 dias", genero: "Tecnico",
        preco: 29.99, isbn: '5a59w909' },
    { _id: 3, name: "React Native", genero: "Tecnico",
        preco: 30.99, isbn: '5a59w909' },
    { _id: 4, name: "ECMASCRIPT 8", genero: "Tecnico",
        preco: 30.99, isbn: '5a59w909' }
];
class Livro {
    static findAll() {
        return Promise.resolve(exemplares);
    }
    static findById(id) {
        return new Promise(resolve => {
            const filtrados = exemplares
                .filter(e => e._id.toString() === id); //Filtra
            let exemplar = undefined;
            if (filtrados.length > 0) {
                exemplar = filtrados[0]; //Grava na var exemplar
            }
            resolve(exemplar); //Resolve a promessa
        });
    }
}
exports.Livro = Livro;
