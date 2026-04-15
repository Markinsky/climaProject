Monitor de Clima Multiciudad (JS) Este es un script ligero desarrollado
en JavaScript (Node.js) que permite consultar las condiciones
meteorológicas actuales de varias ciudades de forma secuencial. Utiliza
la API pública de Open-Meteo, destacando por su sencillez al no requerir
llaves de acceso (API Keys).

🚀 Características Conexión Asíncrona: Implementación de async/await con
el API Fetch nativo.

Procesamiento de JSON: Extracción directa de métricas meteorológicas.

Arquitectura Escalable: Estructura basada en objetos que facilita añadir
nuevas localizaciones.

Sin Dependencias: No requiere librerías externas para funcionar en
entornos modernos.

🛠️ Requisitos Node.js: Versión 18.0.0 o superior (para soporte nativo de
fetch).

Conexión a Internet: Necesaria para realizar las peticiones a los
endpoints de Open-Meteo.

📥 Instalación Clonar el repositorio:

Bash git clone https://github.com/tu-usuario/monitor-clima-js.git
Navegar al directorio:

Bash cd monitor-clima-js (Nota: No es necesario ejecutar npm install ya
que no hay dependencias externas).

📖 Uso Para ejecutar el script y ver el reporte meteorológico en la
consola, utiliza el siguiente comando:

Bash node monitor-clima.js Ejemplo de Salida: Plaintext === INICIANDO
REPORTE DEL CLIMA (JAVASCRIPT) ===

\[CIUDAD: Osaka\] - Temperatura actual: 18.5°C - Velocidad del viento:
12.3 km/h
\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--

\[CIUDAD: Tokio\] - Temperatura actual: 16.2°C - Velocidad del viento:
15.1 km/h
\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--

=== REPORTE FINALIZADO === ⚠️ Manejo de Errores El sistema incluye una
estructura de control try-catch y validación de estados HTTP para
gestionar los siguientes escenarios:

Errores de Red: Si no hay conexión o el DNS falla, se captura la
excepción y se informa al usuario.

Códigos de Estado 4xx/5xx: Si la API devuelve un error (ej. coordenadas
inválidas o servidor caído), el programa imprime el código de error
específico sin detener el flujo de las demás ciudades.

Datos Incompletos: Validación básica para asegurar que la respuesta JSON
contiene la estructura esperada.

🗺️ Ciudades Configuradas Actualmente, el proyecto está configurado para
monitorear:

Osaka, Japón (Lat: 34.6937, Lon: 135.5023)

Tokio, Japón (Lat: 35.6895, Lon: 139.6917)

Desarrollado como un ejercicio de integración de APIs y programación
asíncrona.
