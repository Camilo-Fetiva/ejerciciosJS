console.log('Hola');

// EJERCICIOS DE CLASE

// 1.  Hacer un programa que reciba 2 números del usuario y los sume.

// SECUENCIA

// Variables
/*let numero1= 0;
let numero2= 0;
let resultado= 0;

// Desarrollo
numero1 = prompt ('Ingrese el primer número');
numero2 = prompt ('Ingrese el segundo número');

// Solucion (convertir los prompt a numeros con la propiedad parseFloat)
    resultado = parseFloat(numero1) + parseFloat (numero2);
alert('El resultado es: ' + numero1 + '+' + numero2 + ' es ' + resultado);*/

//2. Hacer un programa que reciba un nombre por parte del usuario, si se recibió nombre por parte del usuario, saludarlo con ese nombre, si no, sólo decir 'Hola'

// CONDICIONAL

// Variables
// Desarrollo

/*let nombre = prompt ('Cual es tu nombre?');

// Solucion - Condicionales

if(nombre){
    alert('Hola ' + nombre);
    console.log('se cumple la condicion');
}
else{
    alert('Hola');
    console.log ('no se cumple la condicion');
}

*/

//3. Hacer un programa que pida al usuario un número entero y muestre los valores desde cero hasta el número ingresado.
//CICLOS

//Variable
/*let numero = parseInt (prompt ('Dame un numero entero'));

//Desarrollo
for(let i=0; i<= numero; i++){
    console.log(i);
} */

    
//5. Hacer un programa que muestre los días de la semana.
//Array con el mismo tipo de datos
// let diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

// Con esto muestra un dato exacto del array (Empieza en 0)
// alert(diasSemana[1]);

//OPCION OPTIMIZADA CON CICLOS
// ForEach = Ciclo para recorrer arreglos de datos
// diasSemana.forEach(
//     (dia) => {
//         console.log(dia);
//     }
// )

//4. Hacer un programa que solicite al usuario un texto, si el usuario no ingresa nada seguir solicitando hasta que lo haga.

//CICLO

// while (true) {
//     texto = prompt('Por favor, ingresa un texto:'); // Se solicita un texto
//     if (texto) { // Si el texto no está vacío, sal del bucle
//         break;
//     } else {
//         alert('No has ingresado nada. Inténtalo de nuevo.'); // Mensaje si no se ingresa nada
//     }
// }



//6. Hacer un programa que pida al usuario dos números, mostrar la suma y la resta del primer número y el segundo número.

// let num1 = parseFloat(prompt ('ingresa un numero'));
// let num2 = parseFloat(prompt ('ingresa otro numero'));

// const suma = num1+num2;
// const resta = num1-num2;

// alert('La suma de los numeros es ' + suma);

// alert('La resta de los numeros es ' + resta);