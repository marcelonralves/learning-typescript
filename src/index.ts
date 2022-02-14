//string, boolean, number...
const x: number = 20; 

console.log(x);


//inferencia x annotation
let y = 12; // inferencia -> não, explicitamente, define o tipo da variável
let z: number = 12; // annotation -> explicitamente define o tipo da variável

//tipos básicos

let firstName: string = "Marcelo";
let age: number = 80;
const isAdult: boolean = true;

console.log(firstName);

// declarando array
const myNumbers: number[] = [1,2,3,4];
console.log(myNumbers.length);
console.log(firstName.toUpperCase()); // TS previne que os métodos de outros tipos sejam usados em tipos não permitidos!

// tuplas --> definindo os tipos dos arrays
let myTuple: [number, string, string[]];

myTuple: [2, "miau", ["opa", "eai", "tranquilo"]];

// object literals -> {props: value} - o famoso chave valor

let user: {name: string, age: number} = {
    name: "marcelo",
    age: 10
}

console.log(user);

user = {
    name: "cachorro", 
    age: 20
}

console.log(user);

// any -> aceita qualquer tipo na variável

let a: any = 0;

a = "marcelo";
a = 10;

//union type -> aceitar mais de um tipo em uma variável, mais indicado que o any

let id: string | number = "10";

id = 20;

//type alias  -> definir um tipo
type myAlias = string | number | boolean

let test: myAlias = 10
const userName: myAlias = "marcelo";
const isAdmin: myAlias = true;

//enum

enum Size {
    p = "pequeno",
    m = "medio",
    g = "grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.g // grande
}

console.log(camisa);

// literal types -> só aceita o valor definido
let teste: "algumvalor" | null;

teste = "algumvalor"; // só vai aceitar isso como atribuição
teste = null; // e null, como foi definido
//teste = "miau"; -> não aceita

// funções

function sum(n1: number, n2: number): number {
    return n1 + n2;
}
console.log(sum(1,2));

// dá pra declarar o tipo de retorno também hehe
function sayHello(name: string): string {
    return `hello, ${name}`;
}
console.log(sayHello("marcelo"));

// parametros opicionais aí sim hein meu patrao, porém tem que tratar isso dentro da função

function sayHelloWithLastName(firstName: string, lastname?: string): void {
    if(lastname) {
        console.log(`hello, ${firstName} ${lastname}!`);
        return;
    }
    console.log(`hello, ${firstName}`);
}

sayHelloWithLastName("marcelo");
sayHelloWithLastName("marcelo", "alves");

// interface

interface twoNumbersInterface {
    number1: number;
    number2: number;
}

// ao invés de chamar os parametros, chama a interface
function sumInterface(nums: twoNumbersInterface): number {
    return nums.number1 + nums.number2;
}

function multiplyInterface(nums: twoNumbersInterface): number {
    return nums.number1 * nums.number2;
}

console.log(sumInterface({number1: 10, number2: 20}));
console.log(multiplyInterface({number1: 10, number2: 30}));

// narrowing -> checar um tipo

function doSomething(info: number | boolean) {
    if(typeof info === "number") {
        console.log(`the number is ${info}`);
        return;
    }
    console.log("this is not a number");
}

doSomething(10);
doSomething(true);

// generics -> função que aceita qualquer tipo específico EX: um ARRAY que aceita numeros ou strings ou booleans

function showArrayItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}

showArrayItems([1,2,3]);
showArrayItems(["oi", "tudo", "bem?"]);


// classes

class User {

   name;
   role;
   isAdmin;

   constructor(name: string, role: string, isAdmin: boolean) {
       this.name = name;
       this.role = role;
       this.isAdmin = isAdmin;
   }

   showUserName() {
       console.log(`hello, ${this.name}! welcome to the system!`);
       return;
   }

   checkIfisAdmin() {
       if(!this.isAdmin) {
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

// classes com interfaces

interface IPayment {
    methods: string[];
    methodPayment(): void;
}

class PicPay implements IPayment {
    methods;
    createdAt;

    constructor(methods: string[]) {
        this.methods = methods;
        this.createdAt = new Date();
    }

    methodPayment() {
        console.log(`you can pay using : ${this.methods}`)
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
    name;
    brand;
    year;
    
    constructor(name: string, brand: string, year: number) {
        this.name = name;
        this.brand = brand;
        this.year = year;
    }

    checkIfCarIsOld() {
        if(this.year  < 2000) {
            console.log("this car is old");
            return;
        }

        console.log("this car is new!");
    }
}

class Toyota extends Car {
    isSellable;

    constructor(name: string, brand: string, year: number, isSellable: boolean) {
        super(name, brand, year); // passando as variaveis para a classe pai
        this.isSellable = isSellable;
    }

    sellCar() {
        if(this.isSellable === false) {
            console.log("im sorry but this car is not avaliable!");
            return;
        }

        console.log("you can buy our car!");
    }
}

const corola = new Toyota("corola", "toyota", 1990, false);

corola.checkIfCarIsOld();
corola.sellCar();