// reasignacion y redeclaracion de las variables

//var 
// var nos permite reasignar y redeclarar una variable
var firstName; // declarar una funcion 
firstName = 'Cristhian'; // reasignar valor a la variable
console.log(firstName);

var lastName = 'Salas'; // se declara y se inicializa(asignar valor)
var lastName = 'Mendoza'; // se redeclara variable y se reasigna el valor

console.log(lastName);


//let
//let nos permite reasignar un valor pero no se puede redeclarar
let secondName = 'Jesus'; // declara y asigna
secondName = 'Pedro'; // se reasigna un valor
console.log(secondName);

let secondName = 'chuy'; // no permite ser redeclarada
console.log(secondName);

//const
//const no permite ser redeclarada ni reasignada(solo si es un array u objeto)
const age = 32; // declara y asigna
console.log(age);

const age = 31; // no puede ser redeclarada
console.log(age);

age = 30; // no puede ser reasignada
console.log(age);

const vehicles = [];
vehicles.push('Toyota'); // al ser un array puede ser empujado y agregar valores 
console.log(vehicles);


vehicles.pop('Toyota');
console.log(vehicles);


