# Gestión de Usuarios con Vite, React y TypeScript

## Descripción

Esta es una aplicación web simple desarrollada con Vite, React y TypeScript que permite gestionar una lista de usuarios. Las funcionalidades incluyen la creación, listado y eliminación de usuarios. La aplicación se ejecuta completamente en el cliente, sin necesidad de un backend.

Tener en cuenta que al recargar la página, los datos de los usuarios se pierden, ya que no se está utilizando un backend para almacenar los datos ni guardando los datos en el almacenamiento local del navegador.

## Estructura del Proyecto

```
└── 📁src
    └── 📁components
        └── UserForm.tsx
        └── UserList.tsx
    └── 📁types
        └── user.ts
    └── App.tsx
    └── index.css
    └── main.tsx
    └── vite-env.d.ts
```

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Juan-Camilo-Sanchez-Echeverri/client-ibero.git
   cd client
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Ejecuta la aplicación:
   ```bash
   npm run dev
   ```
   Esto iniciará la aplicación en modo de desarrollo. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.
