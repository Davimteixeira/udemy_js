// 1 - Arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);
console.log(typeof lista);

const itens = ["davi", true, 2, 3.23, []];

console.log(itens);

// 2 - mais sobre arrays
const arr = ["a", "b", "c", "d", "d"];

console.log(arr[0]);
console.log(arr[2]);

// 3 - Propiedades

const numbers = [1, 2, 3];

console.log(numbers.length);
console.log(numbers['length']);

const myName = "David";
console.log(myName.length)

// 4 - métodos
const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers)


const text = "algo"

console.log(text.toUpperCase());
console.log(text.indexOf("g"))

// 5 - obejetos

const person = {
    name: "davi",
    age: 31,
    job: "programador"
}

console.log(person.name.length)
console.log(person.name)
console.log(typeof person)

// 6 - criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};
  
console.log(car);
  
car.doors = 4;
  
console.log(car);
  
delete car.km;
  
console.log(car);

// 7 - mais sobre objetos
const obj = {
    a: "teste",
    b:true,
};

console.log(obj instanceof Object)

const obj2 = {
    c: []
};

Object.assign(obj2, obj);

console.log(obj2);

// 8 - conhendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

// 9 - Mutação
const a = {
    name: "Matheus",
};
  
const b = a;
  
console.log(a);
console.log(b);
  
console.log(a === b);
  
a.age = 31;
  
console.log(b);
  
delete b.age;
  
console.log(a);
console.log(b);
console.log(b);

// 10 loops em arrays

const users = ["Matheus", "João", "pedro"]


for (let i =0; i < users.length; i++) {
    console.log(`Listando o ususario: ${users[i]}`)
}

const carrosMarcas = ["Fiat", "Audi", "Bentley", "BMW Motorrad"]

for (let i = 0; i < carrosMarcas.length; i++) {
    console.log(`Listando o carros: ${carrosMarcas[i]}`)
} 


// 11 - push e pop 
const array = ["a", "b", "c"];

array.push("D")

console.log(array.length)

array.pop();

console.log(array)

array.push("Dá", "Para", "Inserir", "Vários");

console.log(array);


// 12 - shift e unshift

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);
console.log(letters);

letters.unshift("z", "x", "y");

letters.unshift("p");

console.log(letters);


// 13 - indexof e lastindexof

const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.lastIndexOf("Maçã"));

console.log(myElements.indexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão"));


// 14 - slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);
console.log(subArray);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);
console.log(subArray3);

// 2 em diante
const subArray4 = testeSlice.slice(2);
console.log(subArray4);

// 15 - foreach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O Número é ${numero}`)
})

const posts = [
    { title: "Primeiro post", category: "PHP" },
    { title: "Segundo post", category: "JavaScript" },
    { title: "Terceiro post", category: "Python" },
];


posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// 16 - includes
const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));

console.log(brands.includes("Kia"));

if (brands.includes("BMW")) {
  console.log("Há carros da marca BMW!");
}

// 17 - reverse
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);

// 18 - trim
const trimTest = "  testando \n   ";

console.log(trimTest.trim());

console.log(trimTest);

console.log(trimTest.trim().length);

console.log(trimTest.length);

const final = trimTest.trim();

console.log(final)

// 19 - padstart

const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

// 20 - split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split();
const arrayDaFrase2 = frase.split(" ");

console.log(arrayDaFrase2);
console.log(arrayDaFrase);

// 21 - join
const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar ${itensParaComprar.join(", ")}.`;

console.log(fraseDeCompra);

// 22 - repeat
const palavra = "Testando";

console.log(palavra.repeat(5));

// 23 - rest operator
const somaInfinita = (...args) => {
    let total = 0;
  
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
  
    return total;
};
  
  console.log(somaInfinita(1, 5, 10));
  
  console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7, 7, 8, 9));

  // 24 - for...of
const somaInfinita2 = (...args) => {
    let total = 0;
  
    for (num of args) {
      total += num;
    }
  
    return total;
};
  
console.log(somaInfinita2(1, 5, 10));
  
console.log(somaInfinita2(1, 2, 3, 4, 5, 6, 7, 7, 8, 9));

// 25 - destructuring objetos
const userDetails = {
    firstName: "Matheus",
    lastName: "Battisti",
    job: "Programador",
};
  
const { firstName, lastName, job } = userDetails;
  
console.log(firstName, lastName, job);

// renomeando variáveis
const { firstName: primeiroNome } = userDetails;

console.log(firstName);

// 26 - destructuring me arrays
const myList = ["Avião", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// 27 - json
const myJson =
  '{"name": "Matheus","age": 31, "skills": ["PHP", "JavaScript", "Python"]}';

// 28 - json para objeto e objeto para json
const myObject = JSON.parse(myJson);

console.log(myObject);

// json invalido
const badJson =
  '{"name": Matheus,"age": 31, "skills": ["PHP", "JavaScript", "Python"]}';

// const myBadObject = JSON.parse(badJson);
myObject.isOpenToWork = true;

const myNewJson = JSON.stringify(myObject);// const myBadObject = JSON.parse(badJson);

console.log(myNewJson);

console.log(typeof myNewJson);