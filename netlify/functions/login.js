exports.handler = async function(event, context) {
  // Configuración de las cabeceras CORS
  const headers = {
    'Access-Control-Allow-Origin': '*', // Permite solicitudes desde cualquier origen
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS', // Métodos permitidos
    'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Cabeceras permitidas
  };

  // Respuesta a las solicitudes OPTIONS (verificación CORS)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: headers,
      body: null, // Sin cuerpo para la respuesta preflight
    };
  }

  // Obtener los datos del cuerpo de la solicitud (en caso de ser POST)
  const { username, password } = JSON.parse(event.body);

  // Simula la validación de las credenciales
  if (username === 'user' && password === 'password') {
    return {
      statusCode: 200,
      headers: headers, // Agregamos las cabeceras CORS en la respuesta exitosa
      body: JSON.stringify({ message: 'Login exitoso' })
    };
  } else {
    return {
      statusCode: 200,
      headers: headers, // Agregamos las cabeceras CORS en la respuesta de error
      body: JSON.stringify({ message: 'Credenciales incorrectas' })
    };
  }
};
