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