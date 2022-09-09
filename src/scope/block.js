function fruits(){
    if (true){
        var fruit1 = 'apple'; // global scope
        let fruit2 = 'banana'; // block scope
        const fruit3 = 'melon'; // block scope
        console.log(fruit1);  
        console.log(fruit2); // al estar dentro del bloque (if en este caso) puedes acceder a la variable
        console.log(fruit3);
    }

    console.log(fruit1); // solo se puede accedera la primer variable ya que usa la palabra var haciendo esta variable global scope

    console.log(fruit2); // slo pueden ser accedidas dentro del bloque (aunque se encuentra dentro de la funcion no se encuentra dentro del mismo bloque por lo cual no se puede acceder)
    console.log(fruit3);
}