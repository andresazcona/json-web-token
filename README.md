
# Desarrollo de Aplicaciones Web
## Andres Azcona
#### 2024 - I
#### DEPLOY LINK: https://jwt-for-the-win-finished.vercel.app

## Seguridad de Endpoints en Backend

### Objetivo
Crear endpoints seguros en el backend utilizando una capa de seguridad basada en sesiones. Se debe exponer un endpoint para el inicio de sesión y asegurar los demás endpoints mediante la cookie de sesión que se devuelve cuando el usuario inicia sesión correctamente.

### Credenciales del usuario:
-  Email: `admin@admin.com`
-  Contraseña `admin`

### Funcionalidades
- Login: Exponer un endpoint para que el usuario inicie sesión con correo y contraseña. Este endpoint debe devolver una cookie de sesión que se utilizará para autenticar las solicitudes a otros endpoints.
- Profile: Endpoint protegido que muestra información de un usuario, se sugiere devolver: `nombre`, `apellido`, `correo electrónico` y `fecha de nacimiento` (estos datos deben ser inventados).
- Form: Endpoint protegido que permite hacer submit de un formulario, la propiedad que se espera recibir en el `body` de esté método es `text` (así en inglés y todo en minúsuclas). Básicamente es un method post que se espera que devuelva el mismo texto que se envió.
- Contacts: Endpoint protegido que permite recuperar una lista aleatoria de usuarios.


### Endpoints
1. **Login (`/login`)**
   - Exponer un endpoint para iniciar sesión con correo y contraseña.
   - Devolver una cookie de sesión al usuario después de iniciar sesión correctamente.

2. **Profile (`/profile`)**
   - Endpoint protegido que muestra información de un usuario, se sugiere devolver: `nombre`, `apellido`, `correo electrónico` y `fecha de nacimiento` (estos datos deben ser inventados).

3. **Form (`/form`)**
   - Endpoint protegido que permite hacer submit de un formulario, la propiedad que se espera recibir en el `body` de esté método es `text` (así en inglés y todo en minúsuclas). Básicamente es un method post que se espera que devuelva el mismo texto que se envió.

4. **Contacts (`/contacts`)**
   - Endpoint protegido que permite recuperar una lista aleatoria de usuarios.


