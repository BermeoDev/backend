# Pokémon Backend

Este es el backend para la aplicación de Pokémon, que se conecta a la API pública de Pokémon y gestiona los datos de usuarios y sus Pokémon favoritos.

## Requisitos previos

- Node.js (v14 o superior)
- MySQL (v8 o superior)

## Configuración

1. Clona este repositorio:
   ```
   git clone https://github.com/tu-usuario/pokemon-backend.git
   cd pokemon-backend
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno (usa `.env.example` como referencia).

4. Configura la base de datos MySQL:
   - Crea una nueva base de datos llamada `pokemon_app`.
   - Ejecuta los scripts SQL en `database/schema.sql` para crear las tablas necesarias.

## Ejecución

Para iniciar el servidor en modo desarrollo:
```
npm run dev
```

Para iniciar el servidor en modo producción:
```
npm start
```

El servidor estará disponible en `http://localhost:3000` (o el puerto que hayas especificado en el archivo `.env`).

## Endpoints API

### Autenticación
- POST /api/auth/register - Registrar un nuevo usuario
- POST /api/auth/login - Iniciar sesión

### Pokémon
- GET /api/pokemon/list - Obtener lista de Pokémon
- GET /api/pokemon/:id - Obtener detalles de un Pokémon
- POST /api/pokemon/:id/evolve - Evolucionar un Pokémon
- POST /api/pokemon/favorite - Añadir un Pokémon a favoritos (requiere autenticación)
- GET /api/pokemon/favorite - Obtener lista de Pokémon favoritos (requiere autenticación)

### Usuario
- GET /api/user/profile - Obtener perfil del usuario (requiere autenticación)
- PUT /api/user/profile - Actualizar perfil del usuario (requiere autenticación)

## Pruebas

Para ejecutar las pruebas:
```
npm test
```

## Contribuir

Si deseas contribuir a este proyecto, por favor crea un fork del repositorio, realiza tus cambios y envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.