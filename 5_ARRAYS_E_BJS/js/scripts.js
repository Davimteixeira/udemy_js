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