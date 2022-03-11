var botonSuma = document.getElementById('botonSuma');
botonSuma.addEventListener('click', myFunction,false);
function myFunction() {
    e.preventDefault();
   var num1 = document.getElementById('num1');
   var num2 = document.getElementById('num2');
   var alertText = document.getElementById('alertText');
    var suma = parseInt(num1.value) + parseInt(num2.value);
    alertText.innerHTML = suma;

//        if (suma) {
//    } else {
//        alertText.innerHTML = '0';
//    }
}