// 1. Calcular el área de un rectángulo
function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}

console.log("///////////////");
console.log("Solución 1:");
console.log(calcularAreaRectangulo(5, 3)); // Resultado: 15
console.log(calcularAreaRectangulo(10, 2)); // Resultado: 20
console.log(calcularAreaRectangulo(7, 4)); // Resultado: 28

/* 
Proceso: Identificamos la fórmula del área de un rectángulo (base x altura). La función recibe dos parámetros,
los multiplica y retorna el resultado. Utilizamos console.log() para mostrar el resultado de tres ejemplos.
*/

// 2. Contar palabras en una cadena
function contarPalabras(cadena) {
    return cadena.split(" ").length;
}

console.log("///////////////");
console.log("Solución 2:");
console.log(contarPalabras("Humahuaca es un lugar copado")); // Resultado: 5
console.log(contarPalabras("La vida es bella")); // Resultado: 4
console.log(contarPalabras("JavaScript es divertido")); // Resultado: 3

/* 
Proceso: Utilizamos el método split() para dividir la cadena por los espacios en blanco. Esto nos devuelve un
array con las palabras, y su longitud es la cantidad de palabras. Probamos con tres cadenas distintas.
*/

// 3. Invertir una cadena
function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

console.log("///////////////");
console.log("Solución 3:");
console.log(invertirCadena("hola")); // Resultado: "aloh"
console.log(invertirCadena("mundo")); // Resultado: "odnum"
console.log(invertirCadena("javascript")); // Resultado: "tpircsavaj"

/* 
Proceso: Primero dividimos la cadena en un array de caracteres con split(), luego usamos reverse() para invertir
los caracteres y finalmente join() para recomponer la cadena invertida.
*/

// 4. Encontrar el palíndromo
function esPalindromo(cadena) {
    const normalizado = cadena.toLowerCase().replace(/\s+/g, "");
    const invertido = normalizado.split("").reverse().join("");
    return normalizado === invertido;
}

console.log("///////////////");
console.log("Solución 4:");
console.log(esPalindromo("neuquen")); // true
console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("palabra")); // false

/* 
Proceso: Normalizamos el texto convirtiéndolo a minúsculas y eliminando los espacios. Comparamos la cadena
original normalizada con su versión invertida. Si son iguales, es un palíndromo.
*/

// 5. Edad de un perro en años humanos
function edadCanina(edadPerro) {
    const edadHumana = edadPerro * 7;
    console.log(`Tu perro tiene ${edadHumana} años humanos.`);
}

console.log("///////////////");
console.log("Solución 5:");
edadCanina(7); // Tu perro tiene 49 años humanos.
edadCanina(3); // Tu perro tiene 21 años humanos.
edadCanina(10); // Tu perro tiene 70 años humanos.

/* 
Proceso: Multiplicamos la edad del perro por 7 y mostramos el resultado directamente en un console.log().
No utilizamos return, ya que solo necesitamos imprimir el mensaje en la consola.
*/
