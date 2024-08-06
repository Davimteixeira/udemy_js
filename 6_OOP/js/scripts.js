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

// 6 - funcoes como classes
function criarCachorro(nome, raca) {
    const cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.nome = nome;
    return cachorro;
}
  
const bob = criarCachorro("Bob", "Vira lata");
  
console.log(bob);
  
const jack = criarCachorro("Jack", "Poodle");
  
console.log(jack);
  
console.log(Object.getPrototypeOf(jack));


function criarCarro(ano, marca) {
    const carro = Object.create({});
    carro.ano = ano;
    carro.marca = marca;
    return carro;

}

const honda = criarCarro("2023", "Honda");
  
console.log(honda);


// 7 - funcoes construtoras
function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
  
const husky = new Cachorro("Ozzy", "Husky");
  
console.log(husky);

// 8 - métodos na função construtora
Cachorro.prototype.uivar = function () {
    console.log("Auuu");
};
  
husky.uivar();