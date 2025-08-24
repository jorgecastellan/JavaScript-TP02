//Trabajo Práctico número 2 //

/* 
Ejercicio número 1:

1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/


//Solución

/*
let edad = +prompt("Por favor Ingrese su edad");
if(isNaN(edad) || edad<1 || edad >70) {
    document.write("La edad ingresada no es un número válido")
} else if(edad>=18){document.write("Usted ya tiene edad para conducir")}
else{document.write("no puede conducir por ser menor de 18 años")}
*/

/*
Ejercicio número 2:

2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:
Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido
*/

//Solución


/*
let nota = parseInt(prompt("Ingrese la nota obtenida"));
if(nota<0 || nota>10){document.write("Número erróneo, la nota solo puede tomar valores enteros entre 0 y 10")}
else if(isNaN(nota)){document.write("introduce un número válido")}
else{
    switch (true) {
        case (nota<=2):
            alert("Muy Deficiente")
            break;
        case (nota<=4):
            alert("Insuficiente")
            break;
        case (nota<=6):
            alert("Suficiente")
            break;
        case (nota===7):
            alert("Bien")
            break;
        case (nota<=9):
            alert("Notable")
            break;
        case (nota===10):
            alert("Sobresaliente")
            break;
        
        default:
            break;
    }
}
*/

/*Ejercicio número 3:
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() */

//solución

/*
let cadenas = [];
let continuar = true;

while (continuar) {
  let entrada = prompt("Ingresa una cadena de texto:");
  if (entrada !== null && entrada.trim() !== "") {
    cadenas.push(entrada.trim());
  }

  continuar = confirm("¿Deseás ingresar otra cadena?");
}

if (cadenas.length > 0) {
  alert("Cadenas concatenadas:\n" + cadenas.join(" - "));
} else {
  alert("No se ingresaron cadenas.");
}
*/



/*Ejercicio número 4:
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

//Solución


/*
let suma = 0;

while (true) {
  let entrada = prompt("Ingresa un número (pulsa Cancelar para terminar):");

  if (entrada === null) break; // Si se pulsa Cancelar, se sale del bucle

  let numero = parseFloat(entrada); // Intenta convertir la entrada a número

  if (isNaN(numero)) {
    alert("Eso no es un número válido. Intenta de nuevo.");
    continue; // Vuelve al inicio del bucle
  }

  suma += numero; // Suma el número válido
}

alert("La suma total de los números ingresados es: " + suma);
*/



/*Ejercicio número 5:
5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 




Input:  40773821 
Output: ‘L’

*/

// Solución


/*
let input = prompt(
    "Ingrese un número de DNI entre 0 y 99999999 (Apretar Cancelar para salir)"
);

while(input !== null) {
    const dni = +input;
    if (!isNaN(dni) && dni>= 0 && dni <= 99999999 ) {
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const letra = letras.charAt(dni%23) //charAt alamacena la letra que cumple con la condición 
        alert(`La letra según el dni ingresado es: ${letra}`); 
    }else{
        alert("El número ingresado es inválido. Por favor ingrese un número entre los rangos solicitados");
    }
    input= prompt("Ingrese un nuevo número de DNI entre 0 y 99999999 (Apretar Cancelar para salir)")
}
document.write("Fin del proceso");
*/


/*Ejercicio número 6:
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555

*/

//Solución


/*
for (let i = 1; i <= 30; i++) {
  let linea = "";
  for (let j = 0; j < i; j++) {
    linea += i;
  }
  document.write("<div class='linea'>" + linea + "</div>");
}
  */

/*Ejercicio número 7:
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).
*/

//Solución


/*
let max = prompt("Ingresa un número entre 1 y 50:");
max = parseInt(max);

if (isNaN(max) || max < 1 || max > 50) {
  document.write("Número inválido. Debe estar entre 1 y 50.");
} else {
  for (let i = max; i >= 1; i--) {
    let linea = "";
    for (let j = 0; j < i; j++) {
      linea += i;
    }
    document.write("<div class='linea'>" + linea + "</div>");
  }
}
  */

/*Ejercicio número 8:
Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) */

//Solucion


/*
let max = prompt("Ingresa un número entre 1 y 50:");

max = parseInt(max);

if (isNaN(max) || max < 1 || max > 50) {
  document.write("Número inválido. Debe estar entre 1 y 50.");
} else {
  for (let i = 1; i <= max; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
      linea += j + " ";
    }
    document.write("<div class='linea'>" + linea + "</div>");
  }
}
*/

/*Ejercicio número 9:

9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/

//Solución

/*
for (let i = 1; i <= 500; i++) {
  let mensaje = i;

  // Verifica múltiplos
  if (i % 4 === 0) {
    mensaje += " (Múltiplo de 4)";
  }
  if (i % 9 === 0) {
    mensaje += " (Múltiplo de 9)";
  }

  // Imprime el número
  document.write(mensaje + "<br>");

  // Cada 5 líneas, imprime una línea horizontal
  if (i % 5 === 0) {
    document.write("————————————————————-<br>");
;
  }
}
  */

/*Ejercicio número 10

10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/

//Solución

/*

const filas = parseInt(prompt("Ingrese el número de filas"));
const columnas = parseInt(prompt("Ingrese el número de columnas"));
//total valor para cargar las celdas de la tabla
let total = filas*columnas;
document.writeln(`<table border cellpadding="3">`);

for(let indiceFila=0 ; indiceFila < filas; indiceFila++){
//dibujo de la tabla
document.writeln("<tr>")
//dibujo de las celdas
for(let indiceColumna=0 ; indiceColumna < columnas; indiceColumna++){
    document.writeln(`<td>` +total+ `</td>`);
    total--;
}
document.writeln("</tr>")
}
document.writeln("</table>")
*/


/*Ejercicio número 11
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. */

//Solución

/*
let nombres = [];
let edades = [];

for (let i = 0; i < 3; i++) {
  let nombre = prompt(`Ingresa el nombre de la persona ${i + 1}:`);
  let edad = parseInt(prompt(`Ingresa la edad de ${nombre}:`), 10);

  nombres.push(nombre);
  edades.push(edad);
}

// Encontrar la edad máxima y su índice
let edadMayor = Math.max(...edades);
let indiceMayor = edades.indexOf(edadMayor);

// Mostrar el resultado
alert(`La persona mayor es ${nombres[indiceMayor]} con ${edadMayor} años.`);
*/

/*Ejercicio número 12
12- Realiza un script que genere un número aleatorio entre 1 y 99
*/
//Solución

/*let Aleatorio = Math.floor(Math.random() * 99) + 1;
document.write(`El número aleatorio generado es: ${Aleatorio}`);
*/


/*Ejercicio número 13
13- Realiza un script que pida un texto y lo muestre en mayúsculas.*/

//Solución

/*
let texto = prompt("Escribe un texto:");
if (typeof texto === "string") {
  let textoEnMayusculas = texto.toUpperCase();
  alert("Tu texto en mayúsculas es: " + textoEnMayusculas);
} else {
  alert("Por favor, ingresa un texto válido.");
}
  */

/*Ejercicio número 14
14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/

//Solución


/*
let texto = prompt("Ingresa una cadena de texto:");
let resultado = "";
for (let i = 0; i < texto.length; i++) {
  resultado += texto[i];
  if (i < texto.length - 1) {
    resultado += "-";
  }
}
alert("Texto con guiones: " + resultado);

*/

/*Ejercicio número 15
15- Realiza un script que cuente el número de vocales que tiene un texto.*/
//Solución

/*
let texto = prompt("Ingresa un texto:");
texto = texto.toLowerCase();
let contador = 0;
for (let i = 0; i < texto.length; i++) {
  let caracter = texto[i];
  if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
    contador++;
  }
}
alert(`El texto tiene ${contador} vocales.`);
*/

/*Ejercicio número 16
16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

//Solución
/*
let texto = prompt("Ingresa una cadena de texto:");
let textoInvertido = texto.split("").reverse().join("");
alert(`Texto invertido: ${textoInvertido}`);
*/

/*Ejercicio número 17
Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
*/
//Solución

/*
let texto = prompt("Ingresa una cadena de texto:");
texto = texto.toLowerCase();

let posicion = -1;

for (let i = 0; i < texto.length; i++) {
  let caracter = texto[i];
  if ("aeiou".includes(caracter)) {
    posicion = i;
    break; 
  }
}

if (posicion !== -1) {
  alert(`La primera vocal está en la posición ${posicion}.`);
} else {
  alert("No se encontró ninguna vocal en el texto.");
}
  */







