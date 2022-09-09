
function fruta(){
    frutilla = 'fresa'; // al no declara la variable (var, let, const) se crea una variable con scope globlal
    console.log(frutilla);
}


fruta(); // primero es necesario invocar la funcion para que esta variable sea creada
console.log(frutilla); // se puede acceder ya que no se declaro (agregando var, let o const) creando un scope global de la variable