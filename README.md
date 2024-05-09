# E-commerce App

Esta es una aplicación de comercio electrónico construida en React que permite a los usuarios explorar diferentes productos, ver los detalles de cada uno, agregarlos a un carrito de compras y completar la compra. Los datos de los productos se almacenan en una base de datos de Firebase, y la aplicación ofrece una experiencia fluida e interactiva para el usuario.

## Tecnologías Usadas

La aplicación está construida con las siguientes tecnologías:

- **React**: Biblioteca de JavaScript para la construcción de interfaces de usuario.
- **Tailwind CSS**: Framework CSS para estilos rápidos y personalizables.
- **Firebase**: Base de datos para almacenar y recuperar los productos y las órdenes.
- **React Router**: Para manejar la navegación entre diferentes páginas.
- **React Toastify**: Para mostrar notificaciones de éxito o error.
- **Heroicons**: Íconos SVG para el diseño de la interfaz.
- **ESLint**: Herramienta para mantener un código limpio.

## Uso de la App

### 1. Clonar el Repositorio

Para empezar, clona este repositorio en tu máquina local:

```bash
git clone <https://github.com/sjsalvador/ProyectoFinalSALVADOR>
```

### 2. Configurar Firebase

- Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
- Configura un nuevo proyecto o usa uno existente.
- Añade una nueva base de datos Firestore.
- Configura las reglas para permitir el acceso a los datos según lo necesites.
- Crea una colección llamada `productos` y añade algunos productos manualmente o con un script.
- Añade una colección llamada `orders` para almacenar las órdenes.
- Copia el código de configuración de Firebase y reemplázalo en el archivo `firebase.js` de tu proyecto.

### 3. Instalar Dependencias

Instala las dependencias del proyecto ejecutando:

```bash
npm install
```

### 4. Ejecutar la Aplicación Localmente

Para iniciar la aplicación en tu entorno local, ejecuta:

```bash
npm run dev
```

Esto debería iniciar un servidor de desarrollo y abrir la aplicación en el navegador en la dirección `http://localhost:3000`.

### 5. Configuración Adicional

- **React Toastify**: Asegúrate de tener el contenedor `ToastContainer` en el archivo `App.jsx` para mostrar las notificaciones.
- **Firestore Rules**: Configura las reglas de seguridad en Firestore para permitir la lectura/escritura de acuerdo a tu caso de uso.

### Funcionalidades

- **Explorar Productos:** Navega a través de diferentes categorías de productos.
- **Ver Detalles:** Obtén más información sobre cada producto individual.
- **Agregar al Carrito:** Añade productos al carrito y ajusta las cantidades.
- **Confirmar Compra:** Completa la compra ingresando la información del comprador.
