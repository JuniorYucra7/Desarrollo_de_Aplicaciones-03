// 1. Función para registrar participante con validaciones
function registrarParticipante(nombre, edad, correo, tipo = "general") {
    // Validar nombre no vacío
    if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
        throw new Error("El nombre no puede estar vacío.");
    }

    // Validar edad numérica y mayor o igual a 18
    if (typeof edad !== "number" || isNaN(edad) || edad < 18) {
        throw new Error("La edad debe ser un número entero mayor o igual a 18.");
    }

    // Validar correo no vacío
    if (!correo || typeof correo !== "string" || correo.trim() === "") {
        throw new Error("El correo electrónico no puede estar vacío.");
    }

    // Validar tipo de participante
    const tipoMin = tipo.toLowerCase();
    if (tipoMin !== "general" && tipoMin !== "estudiante") {
        throw new Error("El tipo de participante debe ser 'general' o 'estudiante'.");
    }

    // Asignación de tarifa según el tipo
    const costo = tipoMin === "estudiante" ? 30 : 50;

    return {
        nombre: nombre.trim(),
        edad,
        correo: correo.trim(),
        tipo: tipoMin,
        costo
    };
}

// 2. Inicialización del array
const participantes = [];

// Función auxiliar para agregar con bloque try...catch
function agregarConValidacion(nombre, edad, correo, tipo) {
    try {
        const participante = registrarParticipante(nombre, edad, correo, tipo);
        participantes.push(participante);
        console.log(`✓ Participante registrado con éxito: ${participante.nombre}`);
    } catch (error) {
        console.error(`✗ Error al registrar participante (${nombre}): ${error.message}`);
    }
}

console.log("\n=== EJERCICIO 6: REGISTRO DE PARTICIPANTES ===");

// Registros válidos (mínimo 5)
agregarConValidacion("Ana Torres", 20, "ana.torres@ucsm.edu.pe", "estudiante");
agregarConValidacion("Carlos Mendoza", 28, "carlos.mendoza@gmail.com", "general");
agregarConValidacion("Lucía Velazco", 22, "lucia.v@ucsm.edu.pe", "estudiante");
agregarConValidacion("Ángel Montesinos", 35, "angel.m@empresa.com", "general");
agregarConValidacion("Mateo Paredes", 19, "mateo.p@ucsm.edu.pe", "estudiante");
agregarConValidacion("Sofia Quispe", 24, "sofia.q@gmail.com", "general");

// Pruebas de manejo de errores con try...catch
console.log("\n--- Demostración de Captura de Errores ---");
agregarConValidacion("", 20, "correo@test.com", "estudiante");          // Nombre vacío
agregarConValidacion("Pedro Picapiedra", 16, "pedro@test.com", "general"); // Menor de edad
agregarConValidacion("Maria Ramos", 25, "maria@test.com", "premium");    // Tipo inválido

// 3. Mostrar únicamente los participantes de tipo estudiante
console.log("\n--- 3. Participantes de tipo Estudiante ---");
const estudiantes = participantes.filter(p => p.tipo === "estudiante");
console.log(estudiantes);

// 4. Obtener mediante map() únicamente sus nombres
console.log("\n--- 4. Nombres de los Participantes ---");
const nombresParticipantes = participantes.map(p => p.nombre);
console.log(nombresParticipantes);

// 5. Calcular mediante reduce() el monto total recaudado
console.log("\n--- 5. Monto Total Recaudado ---");
const totalRecaudado = participantes.reduce((acumulado, p) => acumulado + p.costo, 0);
console.log(`Total recaudado: S/ ${totalRecaudado}`);

// 6. Buscar un participante por correo utilizando find()
console.log("\n--- 6. Búsqueda de Participante por Correo ---");
const correoBuscar = "lucia.v@ucsm.edu.pe";
const encontrado = participantes.find(p => p.correo === correoBuscar);

if (encontrado) {
    console.log(`Participante encontrado para '${correoBuscar}':`, encontrado);
} else {
    console.log(`No se encontró ningún participante con el correo '${correoBuscar}'.`);
}