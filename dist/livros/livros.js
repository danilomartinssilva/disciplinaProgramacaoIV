"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exemplares = [
    { name: "Java - Aprenda em 21 dias", genero: "Tecnico",
        preco: 30.99, isbn: '5a59w909' },
    { name: "PHP - Aprenda em 21 dias", genero: "Tecnico",
        preco: 29.99, isbn: '5a59w909' },
    { name: "React Native", genero: "Tecnico",
        preco: 30.99, isbn: '5a59w909' },
    { name: "ECMASCRIPT 8", genero: "Tecnico",
        preco: 30.99, isbn: '5a59w909' }
];
class Livro {
    static findAll() {
        return Promise.resolve(exemplares);
    }
}
exports.Livro = Livro;
