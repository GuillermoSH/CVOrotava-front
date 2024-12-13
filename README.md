# CVOrotava - Frontend 🌐

Este repositorio contiene el frontend de la aplicación **CVOrotava**, desarrollado en **Angular** y diseñado con **TailwindCSS**. Este proyecto complementa el backend, alojado en un repositorio separado, para proporcionar una experiencia de usuario interactiva y responsiva.

This repository contains the frontend of the **CVOrotava** application, developed in **Angular** and designed with **TailwindCSS**. This project complements the backend, hosted in a separate repository, to provide an interactive and responsive user experience.

---

## 📋 Índice / Table of Contents 📋

- [⚙️ Requisitos Previos / Prerequisites](#%EF%B8%8F-configuración-inicial--initial-setup)
- [🛠️ Configuración Inicial / Initial Setup](#%EF%B8%8F-configuración-inicial--initial-setup)
- [▶️ Ejecución del Proyecto / Running the Project](#%EF%B8%8F-ejecución-del-proyecto--running-the-project)
- [📂 Estructura del Proyecto / Project Structure](#-estructura-del-proyecto--project-structure)
- [🔧 Scripts Disponibles / Available Scripts](#-scripts-disponibles--available-scripts)
- [🚀 Tecnologías Utilizadas / Technologies Used](#-tecnolog%C3%ADas-utilizadas--technologies-used)
- [🤝 Contribución / Contribution](#-contribuci%C3%B3n--contribution)
- [📜 Licencia / License](#-licencia--license)

---

## ⚙️ Requisitos Previos / Prerequisites

Antes de ejecutar este proyecto, asegúrate de tener instalado:

Before running this project, make sure you have installed:

- **Node.js** 16 o superior / 16 or higher
- **Angular CLI** 16.1.6 o superior / 16.1.6 or higher
- **npm** 8.0 o superior / 8.0 or higher

---

## 🛠️ Configuración Inicial / Initial Setup

1. **Clona este repositorio / Clone this repository**:
   ```bash
   git clone https://github.com/tu-usuario/CVOrotava-front.git
   cd CVOrotava-front
   ```

2. **Instala las dependencias necesarias / Install the necessary dependencies**:
   ```bash
   npm install
   ```

3. **Configura TailwindCSS / Configure TailwindCSS**:
   - Tailwind está configurado para procesar estilos desde `src/input.css` hacia `src/styles.scss`. Asegúrate de que los cambios en los estilos se reflejen ejecutando:
   - Tailwind is configured to process styles from `src/input.css` to `src/styles.scss`. Ensure style changes are reflected by running:
     ```bash
     npm run tailwind
     ```

---

## ▶️ Ejecución del Proyecto / Running the Project

### Modo Desarrollo / Development Mode

1. **Inicia el servidor de desarrollo / Start the development server**:
   ```bash
   npm start
   ```

2. Abre tu navegador en: `http://localhost:4200`  
   Open your browser at: `http://localhost:4200`

### Generar Build para Producción / Generate Production Build

1. **Construye el proyecto para producción / Build the project for production**:
   ```bash
   npm run build
   ```

2. Los archivos de producción estarán en la carpeta `dist/`.  
   The production files will be in the `dist/` folder.

---

## 📂 Estructura del Proyecto / Project Structure

El proyecto sigue una estructura modular de Angular con soporte para TailwindCSS:  
The project follows a modular Angular structure with TailwindCSS support:

```
CVOrotava-front
├── src
│   ├── app
│   │   ├── components         # Componentes reutilizables / Reusable components
│   │   │   ├── bottombar
│   │   │   ├── configuration
│   │   │   ├── dashboard
│   │   │   ├── equipments
│   │   │   ├── equipments-details
│   │   │   ├── home
│   │   │   ├── login
│   │   │   ├── payments
│   │   │   ├── payments-details
│   │   │   ├── players
│   │   │   ├── profile
│   │   │   ├── sidebar
│   │   │   ├── statistics
│   │   │   └── topbar
│   │   ├── models             # Interfaces y modelos de datos / Data models and interfaces
│   │   ├── pipes              # Pipes personalizados / Custom pipes
│   │   └── services           # Servicios para llamadas a la API / API call services
│   ├── assets                 # Recursos estáticos / Static assets
│   │   └── imgs               # Imágenes / Images
│   ├── environments           # Configuraciones por entorno / Environment configurations
│   ├── input.css              # Archivo fuente para TailwindCSS / TailwindCSS source file
│   ├── styles.scss            # Estilos generados / Generated styles
│   └── index.html             # Punto de entrada HTML / HTML entry point
├── angular.json               # Configuración de Angular / Angular configuration
├── package.json               # Dependencias y scripts / Dependencies and scripts
├── tailwind.config.js         # Configuración de TailwindCSS / TailwindCSS configuration
├── tsconfig.json              # Configuración de TypeScript / TypeScript configuration
└── README.md                  # Documentación del proyecto / Project documentation
```

---

## 🔧 Scripts Disponibles / Available Scripts

En el archivo `package.json` se encuentran los siguientes scripts:  
The following scripts are defined in `package.json`:

- **`npm start`**: Inicia el servidor de desarrollo en `localhost:4200`.
  Starts the development server at `localhost:4200`.
- **`npm run build`**: Genera los archivos optimizados para producción.
  Generates optimized production files.
- **`npm run test`**: Ejecuta las pruebas unitarias con Karma.
  Runs unit tests with Karma.
- **`npm run tailwind`**: Compila los estilos de TailwindCSS en tiempo real.
  Compiles TailwindCSS styles in real-time.
- **`npm run prettier`**: Formatea los archivos HTML del proyecto con Prettier.
  Formats the project HTML files using Prettier.

---

## 🚀 Tecnologías Utilizadas / Technologies Used

- **Angular 16.1.6**: Framework para construir aplicaciones web dinámicas.  
  Framework for building dynamic web applications.
- **TailwindCSS 3.3.3**: Framework de utilidades CSS para un diseño moderno y responsivo.  
  Utility-first CSS framework for modern, responsive design.
- **TypeScript 5.1.3**: Lenguaje tipado para JavaScript.  
  A typed language for JavaScript.
- **SweetAlert2**: Alertas personalizadas para mejorar la experiencia del usuario.  
  Custom alerts to enhance user experience.
- **Zod**: Librería para validación de datos.  
  A library for data validation.

---

## 🤝 Contribución / Contribution

1. Haz un fork del repositorio / Fork the repository.
2. Crea una nueva rama con tus cambios / Create a new branch with your changes:
   ```bash
   git checkout -b feature/new-feature
   ```
> ⚠️ El formato para las ramas es [NombreDescriptivoEnCamelCase]#[Numero Issue]. Ej: EquipBtn#67 / Branch format must be [DescriptiveNameInCamelCase]#[Issue Number]. E. g: EquipBtn#67
3. Realiza un commit de tus cambios / Commit your changes:
   ```bash
   git commit -m "✨ Added new feature; closes #[numero issue / issue number]"
   ```
> ⚠️ Usar [gitmoji](https://gitmoji.dev/) como referencia para crear los commits y comentarlos en Inglés / Use [gitmoji](https://gitmoji.dev/) as the reference for creating the commits and comment them in English
4. Haz un push de la rama / Push the branch:
   ```bash
   git push origin feature/new-feature
   ```
5. Abre un Pull Request / Open a Pull Request.

---

## 📜 Licencia / License

Este proyecto está licenciado bajo la [MIT License](LICENSE).  
This project is licensed under the [MIT License](LICENSE).

