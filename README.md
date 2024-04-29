# Este proyecto es una aplicación de comercio electrónico construida con React

Utiliza llamadas al backend para controlar a los usuarios. El backend se implementó con Express y JWT para la autenticación. Los productos se obtienen de una API externa.

## Inicialización del proyecto

El proyecto se inicializó con Vite, una herramienta de construcción que es más rápida y ligera que Create React App.

## Librerías y dependencias

El proyecto utiliza las siguientes librerías y dependencias:

- **React (react, react-dom)**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router Dom (react-router-dom)**: Biblioteca de enrutamiento para React.
- **Material UI (@mui/material, @mui/icons-material)**: Biblioteca de componentes de UI para React.
- **Material Tailwind (@material-tailwind/react)**: Biblioteca de componentes de UI basada en Tailwind CSS y Material UI.
- **Formik (formik)**: Biblioteca para manejar el estado y la validación de formularios en React.
- **Yup (yup)**: Biblioteca para la validación de esquemas de objetos.
- **Axios (axios)**: Biblioteca para hacer solicitudes HTTP desde el navegador.
- **Notistack (notistack)**: Biblioteca para mostrar notificaciones en React.
- **Emotion (@emotion/react, @emotion/styled)**: Biblioteca para escribir CSS en JS.
- **Font Awesome (@fortawesome/free-solid-svg-icons, @fortawesome/react-fontawesome)**: Biblioteca de iconos.
- **Flowbite React (flowbite-react)**: Biblioteca de componentes de UI basada en Tailwind CSS.

## Base de datos

El proyecto utiliza MongoDB como servidor de base de datos. MongoDB es una base de datos NoSQL orientada a documentos, lo que significa que almacena los datos en una forma semi-estructurada de documentos BSON (Binary JSON). Esto permite una gran flexibilidad y escalabilidad, lo que es ideal para aplicaciones de comercio electrónico donde los datos pueden cambiar rápidamente.

Para conectarse a la base de datos MongoDB, necesitarás una cadena de conexión que puede ser proporcionada por tu servicio de hosting de MongoDB o a través de un servidor local de MongoDB.

## Ejecución del proyecto

Para ejecutar el proyecto, primero instala las dependencias con `npm install` y luego inicia el servidor de desarrollo con `npm run dev`.