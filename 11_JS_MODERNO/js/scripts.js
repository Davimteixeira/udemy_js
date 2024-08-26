// 1 var, let e const
var x = 10;
var y = 15;

if (y > 10) {
  var x = 5;
  console.log(x);
}

console.log(x);

let a = 10;
let b = 15;

if (b > 10) {
  let a = 5;
  console.log(a);
}

console.log(a);

function logName() {
  const name = "Pedro";
  console.log(name);
}

const name = "Matheus";

logName();

// 2 arrow function
const sum = function (a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
  if (name) {
    return "Hello " + name + "!";
  } else {
    return "Hello!";
  }
};

console.log(greeting());
console.log(greeting("Matheus"));

const user = {
  name: "Theo",
  sayUserName() {
    setTimeout(function () {
      console.log(this);
      console.log("Username: " + this.name);
    }, 1000);
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log("Username: " + this.name);
    }, 1200);
  },
};

// user.sayUserName()
// user.sayUserNameArrow()