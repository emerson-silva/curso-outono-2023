/*****************************
 *  variaveis, tipos de dado
 *  e operadore
 *****************************/

let intValue = 2;
let doubleValue = 90.13;
let stringValue = "Aieaeao";
let boolValue = true;
let nullValue;
//let student = undefined;
let animals = ['dog', 'cat',
    "fish", "bird"];

let house = {
    'name': "House Name",
    "rooms": 2,
    'restrooms': 2,
    'windows': 16,
    "area": `${doubleValue}m²`
};
let dateTime = new Date();

/*****************************
 *  estruturas de controle
 *  de fluxo
 *****************************/

while (intValue > 0) {
    // Decrementa depois de imprimir
    console.log(intValue--);
    // Decrementa antes de imprimir
    // console.log(--intValue);
}

{
    let i = 0;
    do {
        console.log(++i);
    } while (i<3);
}

for (let i = 0; i < 3; i++) {
    // conversao implicita
    console.log("O for classico i=" + i);
    console.log("faltam " + ("3" - i));
}

{ // bloco para escopo de variavel
    let count = 0;
    for (const char of stringValue) {
        if (char == 'a') {
            count++;
        }
    }
    console.log(`found '${count}' in "${stringValue}"`);
}

/**
 * for...in eh utilizado para iterar sobre as propriedades
 * de um objeto, mas pode ser usado em listas entretanto
 * o valor da variavel sera a posicao do elemento no array
 * (index) e nao o seu valor como no caso de for...of
 * */
for (property in house) {
    console.log(`${property}=${house[property]}`);
}
// Se nao declarar property como let ou const eh utilizado var por padrao
console.log(property);


{ // bloco para escopo de variavel
    let count = 0;
    for (const char in stringValue) {
        if (stringValue.charAt(char) == 'a') {
            count++;
        }
    }
    console.log(`found '${count}' in "${stringValue}"`);
}

if ("2" == 2) {
    console.log("Dois eh igual a dois");
}

if ("2" === 2) {
    console.log('mas "2" eh diferente de 2');
}

if (Number("2") === 2) {
    console.log('entretanto Number("2") eh igual a 2');
}

if (typeof count == undefined) {
    console.log('count available only in blocked scope')
}

if (!nullValue) {
    console.log("null é falso")
}

/*****************************
 *  funcoes e arrow functions
 *****************************/

animals.forEach(animal => {
    console.log(animal + " esta na posicao " + animals.indexOf(animal));
});

animals.forEach(function (animal) {
    console.log(animal + " esta na posicao " + animals.indexOf(animal));
});

animals.forEach(printAnimalPosition);

function printAnimalPosition (animal) {
    console.log("> " + animal + " esta na posicao " + animals.indexOf(animal));
}

function exampleFunction(param1, param2, paramN) {
    // function body
    console.log('this is a function example');
}

let sumValues = function (value1, value2) {
    return value1 + value2;
}

// let diffBtwnValues = () => {
// let diffBtwnValues = value1 => {

let diffBtwnValues = (value1, value2) => {
    if (value1 > value2) {
        return value1-value2;
    }
    return value2-value1;
}

(function() {
    // call other functions to test then
    exampleFunction(1,2,3);
    console.log("Sum of 2+2=" + sumValues(2,2));
    console.log(diffBtwnValues(2, 10));

})();

/*****************************
 * THIS sometimes is not THIS
 *****************************/

function testThis () {
    console.log(this); // Window
}

class TempObj {
    testThis = testThis; // this 
}

let tempObj = new TempObj(); // TempObject
testThis(); // Window

class Imovel {
    name = "Imovel";
    displayName = function(){
        console.log(this.name);
    }
}

class Casa extends Imovel {
    name = "Casa";
}

let imovel = new Imovel(); // imovel.displayName()
let casa  = new Casa();  // casa.displayName()

class ThisUtils {
    idController = 0;
    name = "ThisUtils";
    // static getNewId = () => {
    static getNewId = function() {
        let newId = this.idController;
        console.log(newId);
        this.idController++;
        return newId;
    }
}

// ThisUtils.getNewId.bind(ThisUtils);

class ThisConsumer {
    constructor(name) {
        this.name = name;
        this.id = ThisUtils.getNewId();
    }
}

let thisConsumer = new ThisConsumer("Consumer");


/*****************************
 *  closure
 *****************************/

function Fibonacci () {
    let index = 0, current = 1, before = 1;
    function calculateNextInSequence() {
        index++;
        let nextNumber = current + before;
        before=current;
        current=nextNumber;
        return current;
    }
    return calculateNextInSequence;
};

{
    let calculateFibonacci = Fibonacci();
    let targetIndex = 10;
    for (let index = 0; index<targetIndex; index++) {
        let nextNumber = calculateFibonacci();
        console.log(`Fibonacci sequence > ${nextNumber}`);
    }
}

/*****************************
 *  manipulacao de arrays
 *  map, filter, etc
 *****************************/
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let textToTranslate = "frase traduzida";

let translatedText = Array.from(textToTranslate).map(elem => {
    return alphabet.indexOf(elem)
});

console.log(`translatedText=${translatedText}`);

let students = [
    {"name": "Maria", age: 35},
    {"name": "Morgana", age: 18},
    {"name": "Joao", age: 35},
    {"name": "Pedro", age: 19},
    {"name": "Jessica", age: 35},
    {"name": "Pietro", age: 24},
    {"name": "Janaina", age: 24},
    {"name": "Fausto", age: 20},
    {"name": "Patricia", age: 35},
    {"name": "Adriano", age: 35},
    {"name": "Paulo", age: 16},
    {"name": "Andressa", age: 24},
]

let studentsA = 

students.sort((studentA, studentB) => {
    // ordena students por idade
    // se arg1 < arg2 return -1
    // se arg1 > arg2 return 1
    // se arg1 == arg2 return 0
    return studentB.age - studentA.age; // crecente
});

console.log(studentsA);
let studentsB = 

students.sort((studentA, studentB) => {
    // ordena por idade, mas se a idade for igual
    // ordena por nome
    if (studentA.age == studentB.age) {
        // compara o nome ao invez de retornar 0 ("empate")
        if (studentA.name < studentB.name) {
            return -1;
        } else if (studentA.name > studentB.name) {
            return 1;
        } else {
            return 0;
        }
    }
    return studentA.age - studentB.age; // decrecente
});

console.log(studentsB);
let studentsC = 
// filtra todo os estudantes que comecam com a letra A
// se retornar true, mantem o elemento, se nao, "descarta"
students.filter((student) => {
    let firstLetter = student.name.charAt(0);
    return firstLetter.toLowerCase() == 'a';
});

console.log(studentsC);


/*****************************
 *  Classes
 *****************************/
{
    //Exemplo de classes usando funcoes
    function Personagem (nome) {
        this.nome = nome;
        this.toString = function () {
            return `FunctionObject { nome: "${this.nome}" }`;
        };
    }

    let personagem1 = new Personagem("Mario");
    console.log(personagem1);
    console.log(`Personagem ${personagem1.nome}=${personagem1.toString()}`);

    let Jogador = function(nome) {
        this.nome = nome;
        this.toString = () => `FunctionObject { nome: "${this.nome}" }`;
    }

    let JogadorNomeado = function JogadorNomeado (nome) {
        this.nome = nome;
        this.toString = function imprimeObj () {
            return `FunctionObject { nome: "${this.nome}" }`;
        };
    }

    let jogador = new Jogador("Emerson");
    let jogadorNomeado = new JogadorNomeado("Cristiano Ronaldo");

    console.log(`Jogador ${jogador.nome}=${jogador.toString()}`);
    console.log(`Personagem ${jogadorNomeado.nome}=${jogadorNomeado.toString()}`);
    console.log(jogador);
    console.log(jogadorNomeado);
}

{
    // exemplo classes usando class
    let Personagem = class Personagem {
        constructor(nome) {
            this.nome = nome;
        }
    }

    let personagem = new Personagem("Emerson");
}
{
    class Personagem {
        constructor(nome) {
            this.nome = nome;
        }
    }

    let personagem = new Personagem('Emerson');

    class Guerreiro extends Personagem {
        #vidaInicial;
        #vidaAtual;

        constructor (nome, vidaParam = 100) {
            super(nome);
            this.#vidaInicial = vidaParam;
            this.#vidaAtual = this.#vidaInicial;
        }

        get vidaAtual () {
            return this.#vidaAtual;
        }
        
        set vidaAtual (value) {
            this.#vidaAtual = value;
        }

        get vidaInicial () {
            return this.#vidaInicial;
        }

        takeDamage = damage => {
            this.#vidaAtual-=damage;
        }
    }

    let guerreiro = new Guerreiro('Guerreiro');

    guerreiro.vidaAtual = 12; // usa get e set
    guerreiro.takeDamage(10);

    console.log(personagem);
    console.log(guerreiro);

    // let [a, b] = [10, 20];
    // let a = 10;
    // let b = 20;

    // const {nome, vidaAtual, vidaInicial} = guerreiro;

    // const nome = guerreiro.nome;
    // const vidaAtual = guerreiro.vidaAtual;
    // const vidaInicial = guerreiro.vidaInicial;

    let [a, b, c = 30] = [10, 20];
    const {nome = "Desconhecido", poderAtaque = 10} = guerreiro;
    const { vidaAtual: vida = 100} = guerreiro;

    console.log(nome, poderAtaque, vida);
}

{
    //Promises e Callbacks
    function callbackSucesso (result) {
        console.log("It succeeded with " + result);
    }

    function callbackFalha (error) {
        console.log("It failed with " + error);
    }

    fazerLogin(callbackSucesso, callbackFalha);

    var fazerLogin = function fazerLogin (argCallbackSucesso, argCallbackFalha) {
        // pegar dados dos inputs e validar
        // enviar dados para a API de login
        // processar resposta da API
        if (respostaAPI.ehSucesso) {
            argCallbackSucesso(respostaAPI);
        } else {
            argCallbackFalha(respostaAPI);
        }
    }

    fazerLogin(callbackSucesso, callbackFalha);

    // Promise
    var promessa = new Promise((resolve, reject) => {
        // console.log -> Promise { <state>: "pending" }
    });

    var promessa = new Promise((resolve, reject) => {
        resolve("Sucesso");
        // console.log -> Promise { <state>: "fulfilled", <value>: "Sucesso" }
    }); 

    var promessa = new Promise((resolve, reject) => {
        reject("Falha");
        // console.log -> Promise { <state>: "rejected", <reason>: "Falha" }
    });

    var fazerLogin = function fazerLogin() {
        return new Promise((resolve, reject) => {
            // Codigo login
            setTimeout(()=> {
                console.log("resolve");
                resolve("Success")
            }, 6000);
        });
    };

    fazerLogin().then(callbackSucesso).catch(callbackFalha).finally();

    fazerLogin().then(result => {
        callbackSucesso();
    }).then(result => {
        console.log("outro result");
    }).catch(error=>{
        console.log(error);
    }).finally(()=>{
        console.log("finally");
    });
    // fazerLogin().then().then().then()...catch().then()....finally();

    // Assync Await
    async function buscarDados() {
        const resposta = await fetch('https://api.example.com/data');
        const dados = await resposta.json();
        return dados;
    }
}