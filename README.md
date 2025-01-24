# Chef Claude - React App with Vite

Chef Claude es una aplicación de recetas que utiliza inteligencia artificial para sugerir recetas basadas en los ingredientes que el usuario introduce. El proyecto está desarrollado con React y Vite, ofreciendo una experiencia rápida y dinámica para los usuarios interesados en la cocina.

## Requisitos previos

Asegúrate de tener instalados los siguientes programas en tu máquina:

- [Node.js](https://nodejs.org/) (preferentemente la versión LTS)
- [npm](https://www.npmjs.com/) (que viene incluido con Node.js)
- [Vite](https://vitejs.dev/)
- Una clave API de [Anthropic](https://www.anthropic.com/). La IA utilizada en este proyecto es `Claude-3`, y necesitarás una clave para poder utilizarla.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/chef-claude.git
   ```

2. Navega hasta el directorio del proyecto:

   ```bash
   cd chef-claude
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Crea un archivo `.env` en el directorio raíz de tu proyecto y agrega tu clave API de Anthropic:
   ```
   VITE_ANTHROPIC_API_KEY=tu-clave-api
   ```

## Correr la aplicación

Una vez instaladas las dependencias y configurada la clave API, puedes ejecutar la aplicación en tu entorno local con el siguiente comando:

```bash
npm run dev
```
