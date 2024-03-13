<h1 align="center">🌤️ Weather App</h1>


## 📚 Acerca del repositorio

Aplicación de pronóstico del clima desarrollada con Typescript, Vite y React. Consume la API de OpenWeather para mostrar los detalles del clima de una determinada ubicación según su nombre, código postal o coordenadas de ubicación.


## 📸 Capturas

<img src="./public/weather_daymode.gif" />

<img src="./public/weather_nightmode.gif" />


## 💻 Instalación y configuración

Clone este repositorio y ejecute el siguiente comando para instalar todos los paquetes que utiliza el proyecto, para ello necesitará tener `node` y `npm` instalados globalmente en su equipo.

```
npm install
```

En la raíz del proyecto cree el archivo `.env` como copia del archivo `.env.template` y complete los variables de entorno con sus valores propios.

```env
# OPENWEATHER
VITE_OPENWEATHER_API_KEY=your_openweather_api_key
```

Según su necesidad, para levantar el proyecto puede ejecutar cualquiera de los siguientes comandos:

- Para ejecutar el proyecto en modo desarrollo:

  ```
  npm run dev
  ```

- Para construir el proyecto y desplegarlo en producción:

  ```
  npm run build
  ```


## 📋 Pruebas

Para ejecutar los tests unitarios y verificar su cobertura puede ejecutar el siguiente comando:

```
npm run test:cov
```

Resultado:

<img src="https://github.com/misicode/WeatherApp/assets/88341114/aae964c2-9df8-48da-a96a-8a3c477737ce" width=600 />


## 🔍 Calidad de código

Para evaluar la calidad de código necesitará tener `SonarQube` desplegado en un ambiente y editar la sección de configuración de Sonar en el archivo `sonar-project.properties` con sus credenciales de acceso.
```
# Sonar configuration
sonar.host.url=http://localhost:9000/
sonar.login=admin
sonar.password=Admin1
```

Ejecute el siguiente comando para iniciar el escaneo de Sonar:

```
npm run sonar
```


## 🛠️ Herramientas utilizadas

| Herramienta    | Uso                                                                                                                  | Versión |
| -------------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://es.reactjs.org)                              | Biblioteca de JavaScript para construir las interfaces de usuario | 18.2.0 |
| [![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)                               | Herramienta de Frontend para construir el proyecto más sencillo y rápido | 5.1.6 |
| [![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org) | Lenguaje de programación fuertemente tipado para escribir código | 5.2.2 |
| [![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/docs/getting-started)              | Framework de testing para las pruebas unitarias | 29.5.0 |
| [![SonarQube](https://img.shields.io/badge/SonarQube-black?style=for-the-badge&logo=sonarqube&logoColor=4E9BCD)](https://docs.sonarqube.org/latest/)       | Plataforma para evaluar el código fuente | 10.3 |
| [![IntelliJ IDEA](https://img.shields.io/badge/IntelliJ_IDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white)](https://www.jetbrains.com/idea/download/) | Entorno de desarrollo para el proyecto | 2023.2 Ultimate Edition |


## 😸 Contacto

Desarrollado por **Alessandra Mincia**

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?logo=github&logoColor=white)](https://github.com/misicode)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/misicode)


## 📝 Agradecimientos

La idea de este proyecto surgió como iniciativa del workshop "SheCodes React", de [SheCodes](https://www.shecodes.io). Para obtener más información detallada de este programa visite el siguiente [enlace](https://www.shecodes.io/react).