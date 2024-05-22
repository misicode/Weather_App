<!-- PROJECT PRESENTATION -->
<div align="center">
  <a href="https://github.com/misicode/WeatherApp">
    <img src="./public/favicon.ico" alt="Logo Icon" width="80" height="80">
  </a>

  <h1 align="center">Weather App</h1>

  <p align="center">
    <span>Aplicación de pronóstico del clima</span><br>
    <a href="https://misicode-weather.netlify.app">Ver Demo</a>
    |
    <a href="https://github.com/misicode/WeatherApp/issues">Reportar Bug</a>
    |
    <a href="https://github.com/misicode/WeatherApp/issues">Solicitar Feature</a>
  </p>
</div><br>


<!-- ABOUT THE PROJECT -->
## 📖 Acerca del repositorio

Aplicación web desarrollada con React que consume la API de [OpenWeather][openweather-url] para obtener el pronóstico del clima de una determinada ubicación según su nombre, código postal o coordenadas de ubicación.

### Construido con

| Herramienta                                       | Descripción                                                       | Versión |
| ------------------------------------------------- | ----------------------------------------------------------------- | ------- |
| [![React][react-badge]][react-url]                | Biblioteca de JavaScript para construir las interfaces de usuario | 18.2.0  |
| [![Vite][vite-badge]][vite-url]                   | Herramienta de Frontend para construir el proyecto                | 5.1.6   |
| [![TypeScript][typescript-badge]][typescript-url] | Lenguaje de programación fuertemente tipado para escribir código  | 5.2.2   |
| [![Jest][jest-badge]][jest-url]                   | Framework de testing para las pruebas unitarias                   | 29.5.0  |
| [![SonarQube][sonarqube-badge]][sonarqube-url]    | Plataforma para evaluar el código fuente                          | 10.5    |
| [![NPM][npm-badge]][npm-url]                      | Administrador de paquetes para instalar las dependencias          | 9.5.0   |
| [![Visual Studio Code][vsc-badge]][vsc-url]       | Editor de código para el proyecto                                 | 1.87.2  |


### Vista previa

<img src="./public/weather_daymode.gif" width="900" />
<img src="./public/weather_nightmode.gif" width="900" />


<!-- GETTING STARTED -->
## 🚀 Iniciando el proyecto

Para poner en funcionamiento una copia local de este repositorio, siga los siguientes pasos.

### Requisitos previos

Obligatorio
```txt
NodeJS >= 16.X
NPM >= 8.X
```

Opcional
```txt
Git
Visual Studio Code
```

### Instalación y configuración

1. Obtenga una clave API gratuita en [OpenWeather][openweather-url].

2. Descargue o clone este repositorio.

   ```sh
   git clone https://github.com/misicode/WeatherApp.git
   ```

3. Instale todos los paquetes NPM.

   ```sh
   npm install
   ```

4. Cree el archivo `.env` como copia del archivo `.env.template` e ingrese la clave de su API.

   ```env
   # OPENWEATHER
   VITE_OPENWEATHER_API_KEY=your_openweather_api_key
   ```

5. Ejecute el proyecto en modo desarrollo.
   ```
   npm run dev
   ```


<!-- TESTING -->
## 📋 Testeando el proyecto

### Pruebas unitarias

Ejecute el siguiente comando para iniciar los tests unitarios y generar el reporte de cobertura.

```
npm run test:cov
```

Visualize los resultados del reporte de cobertura en la ruta `./coverage/lcov-report/index.html`.

<img src="https://github.com/misicode/WeatherApp/assets/88341114/bf6801d3-7087-49ef-a485-ac7feafb9e71" width=800 />


<!-- CODE QUALITY -->
## 🔍 Evaluando la calidad de código

### Requisitos previos

```txt
SonarQube >= 9.X
```

### Configuración

1. Inicie el servicio de SonarQube.

2. Edite la sección de configuración de Sonar en el archivo `sonar-project.properties` con sus credenciales de acceso.

   ```properties
   # Sonar configuration
   sonar.host.url=http://localhost:9000/
   sonar.login=admin
   sonar.password=Admin1
   ```

3. Ejecute el escaneo de Sonar.

   ```
   npm run sonar
   ```

### Resultados

<img src="https://github.com/misicode/WeatherApp/assets/88341114/b6e1d961-0665-4d10-836a-a065a1650726" width=800 />


<!-- LICENSE -->
## 💼 Licencia

Distribuido bajo la licencia MIT. Consulte [LICENSE.txt][license-url] para obtener más información.


<!-- CONTACT -->
## 🌸 Contacto

_Desarrollado por_ **Alessandra Mincia**

[![Misicode][misicode-badge]][misicode-url]
[![GitHub][github-badge]][github-url]
[![LinkedIn][linkedin-badge]][linkedin-url]


<!-- ACKNOWLEDGMENTS -->
## 📝 Agradecimientos

La idea de este proyecto surgió como iniciativa del workshop "SheCodes React", de [SheCodes](https://www.shecodes.io). Para obtener más información detallada de este programa visite el siguiente [enlace](https://www.shecodes.io/react).


<!-- MARKDOWN LINKS -->
[openweather-url]: https://openweathermap.org/api/one-call-3
[react-badge]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://es.reactjs.org
[vite-badge]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[vite-url]: https://vitejs.dev
[typescript-badge]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org
[jest-badge]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[jest-url]: https://jestjs.io/docs/getting-started
[sonarqube-badge]: https://img.shields.io/badge/SonarQube-black?style=for-the-badge&logo=sonarqube&logoColor=4E9BCD
[sonarqube-url]: https://docs.sonarqube.org/latest/
[npm-badge]: https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white
[npm-url]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[vsc-badge]: https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white
[vsc-url]: https://code.visualstudio.com
[license-url]: ./LICENSE.txt
[misicode-badge]: https://img.shields.io/badge/misicode-C020FF?logo=githubsponsors&logoColor=fff
[misicode-url]: https://misicode.netlify.app/
[github-badge]: https://img.shields.io/badge/Github-272727?logo=github&logoColor=fff
[github-url]: https://github.com/misicode
[linkedin-badge]: https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=fff
[linkedin-url]: https://www.linkedin.com/in/misicode