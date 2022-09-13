const myGlobal = 0;

function aumentar(){
    let myNumber = 0; //se asigna una variable dentro de la funcion convirtiendolo en variable con scope local

    return function incremento(){
        myNumber += 1; // al ser llamada se crea un clousure con la variable myNumber quedando unidas
        return myNumber;
    }
}

const contador = aumentar(); // al asignar una nueva variable con valor igual a la funcion que tiene una funcion anidada, creamos un nuevo contexto de ejecucion por cual la variable (en este caso) cambiara su valor cada vez que sea llamada pero solo dentro de ese entorno de ejecucion.
console.log(contador()); // resultado = 1
console.log(contador()); // resultado = 2
console.log(contador()); // al ejecutar el codigo va aunmentando conforme se ejecuta la funcion dentro de ese entorno de ejecucion.
const contador1 = aumentar(); // al asignar la funcion en otra variable se crea otro entorno de ejecucion, por lo cual es una funcion distanta a la otra y la variable que se encontraba dentro de la funcion aumentar no se ve afectada.
console.log(contador1());
console.log(contador1());

console.log(contador()); // al volver a ejecutar la funcion pasada sigue con el con teo
