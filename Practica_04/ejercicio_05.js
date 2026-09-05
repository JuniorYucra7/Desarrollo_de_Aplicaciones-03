// Definición de la función de alto orden 'pipeline'
// Utiliza rest parameters (...transformaciones) para recibir N funciones
// y Array.prototype.reduce() para ejecutarlas secuencialmente de izquierda a derecha.
const pipeline = (...transformaciones) => {
    return (valorInicial) => {
        return transformaciones.reduce((acumulado, funcionActual) => {
            return funcionActual(acumulado);
        }, valorInicial);
    };
};

// Transformaciones base
const duplicar = n => n * 2;
const sumarDiez = n => n + 10;
const cuadrado = n => n ** 2;

// Transformaciones adicionales para pruebas
const triplicar = n => n * 3;
const restarCinco = n => n - 5;
const mitad = n => n / 2;

// --- Demostración y Comprobación ---

// Pipeline 1: duplicar -> sumarDiez -> cuadrado
const operacion1 = pipeline(duplicar, sumarDiez, cuadrado);

// Pipeline 2: triplicar -> restarCinco -> mitad
const operacion2 = pipeline(triplicar, restarCinco, mitad);

// Pipeline 3: sumarDiez -> duplicar -> restarCinco
const operacion3 = pipeline(sumarDiez, duplicar, restarCinco);

// Pruebas e impresión de resultados
console.log("=== EJERCICIO 5: PIPELINE DE TRANSFORMACIONES ===");

const res1 = operacion1(5);
console.log(`Pipeline 1 - Entrada: 5 => Resultado: ${res1}`); 
// Flujo: 5 * 2 = 10 -> 10 + 10 = 20 -> 20^2 = 400

const res2 = operacion2(7);
console.log(`Pipeline 2 - Entrada: 7 => Resultado: ${res2}`); 
// Flujo: 7 * 3 = 21 -> 21 - 5 = 16 -> 16 / 2 = 8

const res3 = operacion3(10);
console.log(`Pipeline 3 - Entrada: 10 => Resultado: ${res3}`); 
// Flujo: 10 + 10 = 20 -> 20 * 2 = 40 -> 40 - 5 = 35