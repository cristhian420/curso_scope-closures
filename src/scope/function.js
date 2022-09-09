
function greeting(){
    let name = 'Juanelo';
    console.log(name); // para mostrar que la varbiale solo existe dentro de la funcion y esta permanece en la memoria solo el tiempo que sea usada la memoria


    if (name === 'Juanelo'){
        console.log(`Hello ${name}!`);
    } else {
        console.log(`Nice to meet you ${name}`);
    }
}

greeting(); // hasta ejecutar la funcion es posible obtener la referencia de la variable
console.log(name); // No se puede acceder a esta variable ya que se creo dentro de la funcion (LOCAL)
