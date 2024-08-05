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