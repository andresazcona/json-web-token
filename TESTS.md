# SET DE PRUEBAS TECNICAS

## Pruebas para el endpoint de Login (`/login`):

### Inicio de Sesión Exitoso:
- Status: Pendiente
- Envía una solicitud POST a `/api/auth/login`.
- Incluye las credenciales correctas (email y password) en el cuerpo de la solicitud.
- Verifica que recibas un código de estado 200 y un mensaje de éxito en la respuesta.
- Comprueba que la cookie de sesión se haya establecido correctamente en la respuesta.

### Inicio de Sesión Fallido:
- Status: Pendiente
- Envía una solicitud POST a `/api/auth/login`.
- Incluye credenciales incorrectas o incompletas en el cuerpo de la solicitud.
- Verifica que recibas un código de estado 401 (No autorizado) en la respuesta.
- Comprueba que no se haya establecido ninguna cookie de sesión.

## Pruebas para el endpoint de Perfil (`/profile`):

### Acceso al Perfil Protegido:
- Status: Pendiente
- Envía una solicitud GET a `/api/profile`.
- Asegúrate de incluir la cookie de sesión válida en la solicitud.
- Verifica que recibas un código de estado 200 en la respuesta.
- Comprueba que los datos del perfil sean correctos en la respuesta.

### Intento de Acceso al Perfil sin Autenticación:
- Status: Pendiente
- Envía una solicitud GET a `/api/profile` sin incluir la cookie de sesión.
- Verifica que recibas un código de estado 401 (No autorizado) en la respuesta.

## Pruebas para el endpoint de Formulario (`/form`):

### Envío de Formulario Correcto:
- Status: Pendiente
- Envía una solicitud POST a `/api/form`.
- Asegúrate de incluir la cookie de sesión válida en la solicitud.
- Incluye un cuerpo de solicitud con una propiedad llamada "text".
- Verifica que recibas un código de estado 200 en la respuesta.
- Comprueba que el texto enviado en la solicitud sea el mismo que se devuelve en la respuesta.

### Intento de Envío de Formulario sin Autenticación:
- Status: Pendiente
- Envía una solicitud POST a `/api/form` sin incluir la cookie de sesión.
- Verifica que recibas un código de estado 401 (No autorizado) en la respuesta.

## Pruebas para el endpoint de Contactos (`/contacts`):

### Acceso a la Lista de Contactos:
- Status: Pendiente
- Envía una solicitud GET a `/api/contacts`.
- Asegúrate de incluir la cookie de sesión válida en la solicitud.
- Verifica que recibas un código de estado 200 en la respuesta.
- Comprueba que la lista de contactos sea válida y contenga datos.

### Intento de Acceso a la Lista de Contactos sin Autenticación:
- Status: Pendiente
- Envía una solicitud GET a `/api/contacts` sin incluir la cookie de sesión.
- Verifica que recibas un código de estado 401 (No autorizado) en la respuesta.
