// Lazy mode
// modo lazy o peresoso hace que javascript ejecute funciones sin tomar en cuenta muchas cosas
piCorto = 3.14;
console.log(piCorto);


//Strict Mode:
//Nos permite ejecutar de forma estricta reglas particulares.
'use strict';
pi = 3.1416;
console.log(pi); // no permite ejecutar el programa ya que la variable pi no es declarada 


"use strict";

function myFunction(){
    return pi = 3.14
}

console.log(myFunction()) // ReferenceError: pi is not defined no es definida la variable pi por lo cual no es posible correrla

"use strict";

function myFunction(){
    let pi;
    return pi = 3.14
}

console.log(myFunction()) // pi = 3.14 ya que la variable fue declarada.