"use strict";
//string, boolean, number...
const x = 20;
console.log(x);
//inferencia x annotation
let y = 12; // inferencia -> não, explicitamente, define o tipo da variável
let z = 12; // annotation -> explicitamente define o tipo da variável
//tipos básicos
let firstName = "Marcelo";
let age = 80;
const isAdult = true;
console.log(firstName);
// declarando array
const myNumbers = [1, 2, 3, 4];
console.log(myNumbers.length);
console.log(firstName.toUpperCase()); // TS previne que os métodos de outros tipos sejam usados em tipos não permitidos!
// tuplas --> definindo os tipos dos arrays
let myTuple;
myTuple: [2, "miau", ["opa", "eai", "tranquilo"]];
// object literals -> {props: value} - o famoso chave valor
let user = {
    name: "marcelo",
    age: 10
};
console.log(user);
user = {
    name: "cachorro",
    age: 20
};
console.log(user);
// any -> aceita qualquer tipo na variável
let a = 0;
a = "marcelo";
a = 10;
//union type -> aceitar mais de um tipo em uma variável, mais indicado que o any
let id = "10";
id = 20;
let test = 10;
const userName = "marcelo";
const isAdmin = true;
//enum
var Size;
(function (Size) {
    Size["p"] = "pequeno";
    Size["m"] = "medio";
    Size["g"] = "grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.g // grande
};
console.log(camisa);
// literal types -> só aceita o valor definido
let teste;
teste = "algumvalor"; // só vai aceitar isso como atribuição
teste = null; // e null, como foi definido
//teste = "miau"; -> não aceita
// funções
function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(1, 2));
// dá pra declarar o tipo de retorno também hehe
function sayHello(name) {
    return `hello, ${name}`;
}
console.log(sayHello("marcelo"));
// parametros opicionais aí sim hein meu patrao, porém tem que tratar isso dentro da função
function sayHelloWithLastName(firstName, lastname) {
    if (lastname) {
        console.log(`hello, ${firstName} ${lastname}!`);
        return;
    }
    console.log(`hello, ${firstName}`);
}
sayHelloWithLastName("marcelo");
sayHelloWithLastName("marcelo", "alves");
// ao invés de chamar os parametros, chama a interface
function sumInterface(nums) {
    return nums.number1 + nums.number2;
}
function multiplyInterface(nums) {
    return nums.number1 * nums.number2;
}
console.log(sumInterface({ number1: 10, number2: 20 }));
console.log(multiplyInterface({ number1: 10, number2: 30 }));
// narrowing -> checar um tipo
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`the number is ${info}`);
        return;
    }
    console.log("this is not a number");
}
doSomething(10);
doSomething(true);
// generics -> função que aceita qualquer tipo específico EX: um ARRAY que aceita numeros ou strings ou booleans
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
showArrayItems([1, 2, 3]);
showArrayItems(["oi", "tudo", "bem?"]);
// classes
class User {
    constructor(name, role, isAdmin) {
        this.name = name;
        this.role = role;
        this.isAdmin = isAdmin;
    }
    showUserName() {
        console.log(`hello, ${this.name}! welcome to the system!`);
        return;
    }
    checkIfisAdmin() {
        if (!this.isAdmin) {
            console.log("sorry! you cant access this!");
            return;
        }
        console.log("hello! you are admin!");
    }
}
const marcelo = new User("marcelo", "ceo", true);
marcelo.showUserName();
marcelo.checkIfisAdmin();
const zeus = new User("zeus", "support", false);
zeus.showUserName();
zeus.checkIfisAdmin();
class PicPay {
    constructor(methods) {
        this.methods = methods;
        this.createdAt = new Date();
    }
    methodPayment() {
        console.log(`you can pay using : ${this.methods}`);
    }
    created() {
        console.log(`your account is created at : ${this.createdAt}`);
    }
}
const picpay = new PicPay(["pix", " boleto", " credit card"]);
picpay.methodPayment();
picpay.created();
// herança
class Car {
    constructor(name, brand, year) {
        this.name = name;
        this.brand = brand;
        this.year = year;
    }
    checkIfCarIsOld() {
        if (this.year < 2000) {
            console.log("this car is old");
            return;
        }
        console.log("this car is new!");
    }
}
class Toyota extends Car {
    constructor(name, brand, year, isSellable) {
        super(name, brand, year); // passando as variaveis para a classe pai
        this.isSellable = isSellable;
    }
    sellCar() {
        if (this.isSellable === false) {
            console.log("im sorry but this car is not avaliable!");
            return;
        }
        console.log("you can buy our car!");
    }
}
const corola = new Toyota("corola", "toyota", 1990, false);
corola.checkIfCarIsOld();
corola.sellCar();
