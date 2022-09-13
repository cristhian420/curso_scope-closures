// crearemos un algoritmo que te permite aumentar, decrementar y  mostrar dinero ingresado

function moneyBox(){
let totalMoney = 0;
  //podemos guardar un objeto dentro de una funcion y hacer una fabrica de funciones, es decir podemos crear diversas funciones a las culaes podemos acceder
    return {
        increse: function (depositMoney){
            totalMoney += depositMoney;
            return ;
        },
        decrese: function (removedMoney){
            totalMoney -= removedMoney;
            return;
        },
        showValue: function (){
            return `You have $${totalMoney}`;
        }
    };
}

const myMoneyBox = moneyBox();
myMoneyBox.increse(50); // La manera de acceder a esas funciones es llamandolas despues del . ya que este sera un objeto
myMoneyBox.increse(300);
myMoneyBox.decrese(25);
console.log(myMoneyBox.showValue()); // asi podemos hacer que el valor de la variable no sea accecible al menos que creemos una funcion para ello

// es por eso que no podemos reasignar o modificar ese valor llamando el atributo por ejemplo myMoneyBox.totalMoney = 400