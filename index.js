/**
 * Sistema de monitoreo meteorológico multiciudad en JavaScript.
 * Utiliza fetch para realizar peticiones asíncronas.
 */

// URL Base de la API
const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

// Lista de objetos (Equivalente a la clase interna Ciudad en Java)
const ciudades = [
    { nombre: "Osaka", lat: 34.6937, lon: 135.5023 },
    { nombre: "Tokio", lat: 35.6895, lon: 139.6917 }
];

async function obtenerClimaCiudad(ciudad) {
    // Construcción de la URL usando Template Literals (más limpio que String.format)
    const urlCompleta = `${WEATHER_API_URL}?latitude=${ciudad.lat}&longitude=${ciudad.lon}&current_weather=true`;

    try {
        // fetch inicia la petición (por defecto es GET)
        const respuesta = await fetch(urlCompleta);

        // Validación del estado
        if (!respuesta.ok) {
            console.log(`!!! Error en ${ciudad.nombre}: Código ${respuesta.status}`);
            return;
        }

        // En JS, procesar JSON es nativo y directo, no necesitas métodos auxiliares de extracción
        const datos = await respuesta.json();
        const { temperature, windspeed } = datos.current_weather;

        // Impresión de resultados
        console.log(`[CIUDAD: ${ciudad.nombre}]`);
        console.log(`- Temperatura actual: ${temperature}°C`);
        console.log(`- Velocidad del viento: ${windspeed} km/h`);
        console.log("----------------------------------\n");

    } catch (error) {
        console.error(`!!! No se pudo obtener el clima de ${ciudad.nombre}: ${error.message}`);
    }
}

async function main() {
    console.log("=== INICIANDO REPORTE DEL CLIMA (JAVASCRIPT) ===\n");

    // Ejecutamos las peticiones. Usamos un for...of para que sean secuenciales
    // o Promise.all si quisiéramos que fueran en paralelo.
    for (const ciudad of ciudades) {
        await obtenerClimaCiudad(ciudad);
    }

    console.log("=== REPORTE FINALIZADO ===");
}

// Ejecutar el programa
main();