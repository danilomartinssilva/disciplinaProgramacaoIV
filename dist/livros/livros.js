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
    static deleteById(id) {
        exemplares.splice(Number.parseInt(id.toString()) - 1, 1);
        return Promise.resolve(exemplares);
    }
    static add(ex) {
        exemplares.push(ex);
        return Promise.resolve(exemplares);
    }
    static edit(id, newData) {
        const exemplar = exemplares[parseInt(id.toString())];
        const update = newData;
        for (let field in update) {
            exemplar[field] = update[field];
        }
        return Promise.resolve(exemplar);
    }
}
exports.Livro = Livro;
