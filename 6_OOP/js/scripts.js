// 1 - Método
const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au Au")
    }
}

console.log(animal.nome)

animal.latir()


// 2 - aprofundando em métodos
const pessoa = {
    nome: "Matheus",
  
    getNome: function () {
      return this.nome;
    },
  
    setNome: function (novoNome) {
      this.nome = novoNome;
    },
  };
  
  console.log(pessoa.nome);
  
  console.log(pessoa.getNome());
  
  pessoa.setNome("Davi Magalhães");
  
  console.log(pessoa.getNome());


// 3 - prototype
const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(arr.length);

console.log(Object.getPrototypeOf(arr) === Array.prototype);


// 4 - mais sobre prototype
const myObject = {
    a: "b",
};
  
console.log(Object.getPrototypeOf(myObject));
  
console.log(Object.getPrototypeOf(myObject) === Object.prototype);
  
const mySecondObject = Object.create(myObject);
  
console.log(mySecondObject);
  
console.log(Object.getPrototypeOf(mySecondObject) === myObject);


// 5 - classes básicas
const cachorro = {
    raca: null,
};
  
const pastorAlemao = Object.create(cachorro);
  
pastorAlemao.raca = "Pastor Alemão";
  
const bulldog = Object.create(cachorro);
  
bulldog.raca = "Bulldog";