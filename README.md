
# 🌌 Documentación sitio web Hulux Telecom.

Este proyecto utiliza [Astro](https://astro.build/) para construir la página oficial de __Hulux Telecomunicaciones__. En esta guía se detalla como instalar el proyecto, modificar el código, compilar y desplegar el sitio web.

## 🚀 Requisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión recomendada: >= 18)
- [npm](https://www.npmjs.com/) o [pnpm](https://pnpm.io/) (opcional, puedes usar Yarn también)
- [Git](https://git-scm.com/downloads)

Puedes verificar si ya los tienes con:

```bash
node -v
npm -v
git --version
```

## 📦 Instalación

1.  Clona este repositorio:
    

```bash
git clone https://github.com/JesusArrazola/pagina-hulux.git
cd pagina-hulux

```

2.  Instala las dependencias:
    

Usando `npm`:

```bash
npm install

```

## 🔧 Modificación del Proyecto

-   Los archivos fuente están en el directorio `src/`.
    
-   Las páginas están en `src/pages/` (usa rutas basadas en archivos).
    
-   Los componentes reutilizables están en `src/components/`.
    
-   Los estilos globales pueden colocarse en `src/styles/`. __NOTA:__ Este proyecto utiliza Tailwind para los estilos CSS. Conoce más de Tailwind en la [Documentación (en inglés)](https://tailwindcss.com/docs/installation/using-vite). Sin embargo, también puedes usar CSS tradicional si así lo deseas.
    

Puedes modificar cualquier archivo en `src/` y Astro recargará automáticamente la página si usas el servidor de desarrollo.

## 🧪 Servidor de Desarrollo

Para iniciar el entorno de desarrollo:

```bash
npm run dev

```

Luego abre tu navegador y visita: [http://localhost:4321](http://localhost:4321/)

## 🏗️ Compilar para Producción

Para compilar el sitio estático:

```bash
npm run build

```

Los archivos listos para producción se generarán en la carpeta `dist/`.

Puedes previsualizar la compilación con:

```bash
npm run preview

```

## 🌐 Despliegue

Después de la compilación del proyecto, se generarán los archivos del sitio dentro del directorio __/dist__.
Para desplegar la página web en el servidor hay que copiar el contenido de la carpeta dist en la carpeta __/var/www/html__ del servidor web.

## 📁 Estructura del Proyecto

```
.
├── public/          # Archivos estáticos (imágenes, fuentes, etc.)
├── src/
│   ├── components/  # Componentes reutilizables
│   ├── layouts/     # Diseños base
│   ├── pages/       # Rutas y páginas
│   └── styles/      # CSS o Tailwind
├── astro.config.mjs # Configuración de Astro
├── package.json     # Dependencias y scripts
└── tsconfig.json    # Configuración de TypeScript (si se usa)

```

## 📚 Recursos útiles

-   [Documentación oficial de Astro](https://docs.astro.build/)
    
-   [Guía de componentes](https://docs.astro.build/es/basics/astro-components/)
    

----------
