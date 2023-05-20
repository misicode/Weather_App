<h1 align="center">Workshop: Weather App</h1>

## 📚 Acerca del Proyecto

Aplicación de pronóstico del clima que permite realizar la búsqueda de una determinada ubicación, ya sea por su nombre, código postal o coordenadas de ubicación. Muestra los detalles de temperatura, humedad y viento del día actual, así como también de los próximos 6 días.

## 📸 Capturas

<img src="./public/weather_daymode.gif" />

<img src="./public/weather_nightmode.gif" />

## 💻 Instalación y configuración

Clone este repositorio y ejecute el siguiente comando para instalar todos los paquetes que utiliza el proyecto, necesitará tener `node` y `npm` instalados globalmente en su equipo.

```
npm install
```

En la raíz del proyecto cree el archivo `.env` como copia del archivo `.env.template` y complete los variables de entorno con sus valores propios.

```env
# OPENWEATHER
VITE_OPENWEATHER_API_KEY=your_openweather_api_key
```

Según su necesidad puede ejecutar cualquiera de los siguientes comandos:

- Para ejecutar el proyecto en modo desarrollo:

  ```
  npm run dev
  ```

- Para construir el proyecto para producción:

  ```
  npm run build
  ```

- Para ejecutar los tests unitarios y su cobertura:

  ```
  npm run test:cov
  ```

## 🛠️ Desarrollado con

| Tecnología     | Uso                                                                                                                  |
| -------------- | -------------------------------------------------------------------------------------------------------------------- |
| [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://es.reactjs.org)                              | Biblioteca de JavaScript para construir las interfaces de usuario |
| [![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)                               | Herramienta de Frontend para construir el proyecto más sencillo y rápido |
| [![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org) | Lenguaje de programación fuertemente tipado para escribir código |
| [![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)    | Lenguaje de diseño gráfico para aplicar estilos a las pantallas |
| [![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/docs/getting-started)              | Framework de testing para las pruebas unitarias |
| [![SonarQube](https://img.shields.io/badge/SonarQube-black?style=for-the-badge&logo=sonarqube&logoColor=4E9BCD)](https://docs.sonarqube.org/latest/)       | Plataforma para evaluar el código fuente |

## 📝 Créditos

La idea de este proyecto surgió como iniciativa del workshop "SheCodes React", de [SheCodes](https://www.shecodes.io). Para obtener más información detallada de este programa visite el siguiente [enlace](https://www.shecodes.io/react).
