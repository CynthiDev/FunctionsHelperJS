
/**
 * 1. Calcular el área de un rectángulo
 * 
 * @param {number} base - La longitud de la base del rectángulo.
 * @param {number} altura - La altura del rectángulo.
 * @returns {number} El área del rectángulo.
 */
function calcularAreaDeRectangulo(longitud, ancho) {
    return longitud * ancho;
}

console.log("///////////////");
console.log("Solución 1:");
console.log(calcularAreaDeRectangulo(5, 3)); // Resultado: 15
console.log(calcularAreaDeRectangulo(10, 2)); // Resultado: 20
console.log(calcularAreaDeRectangulo(7, 4)); // Resultado: 28

/* 
Proceso: Primero identifiqué la fórmula del área de un rectángulo (base x altura). La función recibe dos parámetros,
los multiplica y retorna el resultado. Es importante señalar que  evité  almacenar el  resultado de la multiplicación
en una variable para  evitar llenar la memoria, por el contrario retorno directamente el resultado.
*/




/**
 * 2. Contar palabras en una cadena
 * 
 * @param {string} cadena - La cadena de texto a analizar.
 * @returns {number} La cantidad de palabras en la cadena.
 */
function contarPalabras(cadena) {
    return cadena.split(" ").length;
}

console.log("///////////////");
console.log("Solución 2:");
console.log(contarPalabras("Blanca nieves y los siete enanitos")); // Resultado: 6
console.log(contarPalabras("La vida es bella")); // Resultado: 4
console.log(contarPalabras("Hola estoy programando con JavaScript")); // Resultado: 5

/* 
Proceso: Utilizé el método split() para dividir la cadena por los espacios en blanco. Esto devuelve un
array con las palabras, entonces la longitud del Array será la cantidad de palabras.
*/




/**
 * 3. Invertir una cadena
*
* @param {string} cadena - La cadena de texto a invertir.
* @returns {string} La cadena invertida.
*/
function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

console.log("///////////////");
console.log("Solución 3:");
console.log(invertirCadena("hola")); // Resultado: "aloh"
console.log(invertirCadena("mundo")); // Resultado: "odnum"
console.log(invertirCadena("entrega")); // Resultado: "agertne"

/* 
Proceso: Primero volví a  usar el método split() para dividir la cadena en un array de caracteres, luego usé el método reverse() para invertir
los caracteres y finalmente usé join() para unir los caracteres de la cadena invertida.
*/




/**
 * 4. Encontrar un palíndromo
 *
 * @param {string} cadena - La cadena a evaluar.
 * @returns {boolean} true si es un palíndromo, false si no lo es.
*/
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
Proceso: Primero normalizao la cadena (quito espacios con un REGEX - expresion regular y paso todo a minúsculas). 
Comparo la cadena original normalizada con su versión invertida ( utilizando nuevamente los metodos  split() rverse() y join()). 
Por último comparalas dos cadenas y si son iguales, es un palíndromo devolviendo true.
Optimizo el proceso evitanto  crear  variables para antes de response para que no  ocupen espacio en la memoria innecesariamente.
El nombre del metodo  usa buenas prácticas de programacion porue devuelve un booleano
*/






/**
 * 5. Crear un programa para convertir la edad de un perro a años humanos
 * 
*/
function calcularEdadHumanaPerro() {
    let edadPerro = prompt("Ingresa la edad de tu perro en años:");

    if (!isNaN(edadPerro) && edadPerro > 0) {
        const edadHumana = edadPerro * 7; 
        console.log(`Tu perro tiene ${edadHumana} años humanos.`);
    } else {
        console.log("Por favor, ingresa un número válido.");
    }
}

console.log("///////////////");
console.log("Solución 5:");
calcularEdadHumanaPerro(); // Tu perro tiene 49 años humanos.
calcularEdadHumanaPerro(); // Tu perro tiene 21 años humanos.
calcularEdadHumanaPerro(); // Tu perro tiene 70 años humanos.

/* 
Proceso:  El metodocomo vaa recibir valores del Prompt  (pantalla) no recibe ningun  argumento.  Tambien pensé en 
validaciones para ue   el usuario ingrese in valor  no negativo y  numérico.
segun lo ue ingrsa el usuario se muestra en consola el mensaje correspondiente.
*/


