# Social Media 📱

Aplicación web tipo red social construida con **Node.js**, **Express** y **MongoDB**, desarrollada como proyecto del curso de Desarrollo de Aplicaciones Web Avanzado en Tecsup. Permite crear usuarios y publicar posts en un feed, con una arquitectura organizada en capas.

## ✨ Características

- CRUD completo de posts (crear, listar, editar, eliminar)
- Registro de usuarios con validaciones de esquema
- Feed dinámico con avatares, hashtags e imágenes
- Selector visual de autor al crear un post
- Interfaz responsive con animaciones y diseño personalizado

## 🛠️ Tecnologías

- **Node.js** + **Express** — servidor y rutas
- **MongoDB** + **Mongoose** — base de datos NoSQL y modelado de esquemas
- **EJS** — motor de plantillas para las vistas
- **CSS puro** — estilos, animaciones y diseño responsive
- **Nodemon** — recarga automática en desarrollo

## 📁 Estructura del proyecto

src/
├── controllers/ # Lógica de manejo de peticiones (posts, usuarios, home)
├── db/ # Conexión a MongoDB
├── models/ # Esquemas de Mongoose (User, Post)
├── public/css/ # Estilos
├── repositories/ # Acceso a datos, separado de la lógica de negocio
├── routes/ # Definición de rutas Express
├── services/ # Lógica de negocio
└── views/ # Plantillas EJS (home, feed, formularios)
app.js # Punto de entrada de la aplicación


## 🚀 Instalación y uso

1. Clona el repositorio:
```bash
   git clone https://github.com/saraisoto-crypto/Social-Media.git
   cd Social-Media
```

2. Instala las dependencias:
```bash
   npm install
```

3. Crea un archivo `.env` en la raíz con tus propias credenciales:
```env
   MONGO_URI=tu_cadena_de_conexion_de_mongodb
   PORT=3001
```

4. Inicia el servidor:
```bash
   npm start
```
   O en modo desarrollo (con recarga automática):
```bash
   npm run dev
```

5. Abre [http://localhost:3001](http://localhost:3001) en tu navegador.

## 📚 Arquitectura

El proyecto sigue un patrón por capas para mantener el código desacoplado:

Rutas → Controladores → Servicios → Repositorios → Modelos (Mongoose) → MongoDB


Esto permite que la lógica de negocio no dependa directamente de Mongoose, facilitando pruebas y mantenimiento.

## 👩‍💻 Autora

**Sarai Soto López**
Mobile Programming — Tecsup

---
*Proyecto académico del curso de Desarrollo de Aplicaciones Web Avanzado.*
