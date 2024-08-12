// 1 - movendo-se no DOM
console.log(document.body);

console.log(document.body.childNodes);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);


// 2 - selecionando por tag
const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - selecionando elemento por id
const title = document.getElementById("title");

console.log(title);

// 4 - selecionando elementos por classe
const products = document.getElementsByClassName("product");

console.log(products);

// 5 - selecionando os elementos por CSS
const productsQuery = document.querySelectorAll(".product");

console.log(products);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);