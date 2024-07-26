// 1 - Váriaveis
let nome = "Davi";

console.log(nome)

nome = 'Davi'

console.log(nome)

const idade = 31;

console.log(idade)

let a, b, c = 23;

// 3 - prompot

// const age = prompt("Digite sua idade: ")

// console.log(`Você tem ${age} anos`)


// 4 - Alert 
// alert("Testando")


// 5 - Math

console.log(Math.max(1,12,324,2));

console.log(Math.floor(1.24));

console.log(Math.ceil(5.12))

// 6 - Console

console.log("Teste")

console.error("Error ")

console.warn("Aviso !")


// 7 - if

const m =10;

if(m > 5) {
    console.log("M é maior que 5")
}

const nome2 = "Davi";

if (nome2 === "Davi") {
    console.log("Meu nome deu certo");
}

if (nome2 === "Jose") {
    console.log("NOme de maria")
}


// 8 - else
const loggedIn = false

if (loggedIn) {
    console.log("Está autenticadao")
} else {
    console.log("Não está autenticado")
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
  console.log("Números mais altos!");
} else {
  console.log("Os números não são alto suficientes!");
}

// 9 - else if 
if (1 > 2) {
    console.log("Teste");
  } else if (2 > 3) {
    console.log("Teste 2");
  } else if (5 > 1) {
    console.log("Agora sim!");
  }
  
  const userName = "Matheus";
  const userAge = 31;
  
  if (userName === "José") {
    console.log("Bem vindo José!");
  } else if (userName === "Matheus" && userAge === 31) {
    console.log("Olá Matheus, você tem 31 anos!");
  } else {
    console.log("Nenhuma condição aceita!");
  }