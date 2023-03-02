

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://standardjs.com/)

![Bower](https://img.shields.io/bower/l/bootstrap?color=blue&logo=node&logoColor=red)

![Bower](https://img.shields.io/badge/Node-V14.x-blue)



![Version: 1.0.0](https://img.shields.io/badge/Version-1.0.0-brightgreen.svg)


# API Challenge

Esta es una API de Express para mi proyecto. La API permite realizar ciertas operaciones que se describen en la documentación.


## Authors

- [Jaime Gaona](https://github.com/jgaonadev) - Software Developer


## 🚀 About Me
I'm a full stack developer with more than 7 years of experience in
software design and implementation, Scheduling and
managing programming tasks, managing Junior
developer tasks.


## 🛠 Skills
Javascript, MERN Stack, Node.js, RxJS, ViteJs, React, Testing Library, Context, Axios, React
MUI, Redux.js, TypeScript, React.js, Jest, JavaScript, Azure, Docker, AWS (SNS,EC2,S3, Lambda)


## Requirements

* Node.Js: v14.x
* Git

```bash
    curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash - &&\

    sudo apt-get install -y nodejs

    node -v
```

Verifique si tiene git instalado en su sistema, si no proceda con el comando de instalacion.
```bash
    git -v

    apt-get install git
```

## Installation

Clone el proyecto
```bash
  git clone https://github.com/jgaonadev/api-challenge.git
```


Install api-challenge with npm

```bash
  npm install my-project
  cd my-project
```

Crear un archivo para las variables de entorno .env - tiene un example en el codigo con la guia.
```bash
    NODE_ENV=development
    HOST=127.0.0.1
    PORT=3000
    API_KEY="aSuperSecretKey"
    API_URL_BASE="https://echo-serv.tbxnet.com/v1/secret"
```

Existen dos formas para ejecutar el proyecto definidas en package.json, se describen a continuacion
```bash
    npm run dev  <-- Inicia la api para entorno desarrollo
    npm start    <-- Inicia la api para entornos productivos 
```
## Running Tests

El proyecto cuenta con pruebas unitarias, definidas en app.test.js

Para ejecutar pruebas, ejecute el siguiente comando

```bash
  npm test
```


## Documentation

Actualmente tendra a su disposicion una instancia en aws ejecutando la api en un entorno productivo

[Documentation](http://3.216.125.244:3000/api-docs/)

Ultima Actualizacion: 01/03/2023


## Diagrama de Secuencia

A continuacion se expone el diagrama de flujo de la api

![App Screenshot](https://cs1.ssltrust.me/index.php/apps/files_sharing/ajax/publicpreview.php?x=1847&y=602&a=true&file=fullstackflowdiagram.png&t=6u9aC5hCTEhTpT1&scalingup=0)


## License

[MIT](https://choosealicense.com/licenses/mit/)

