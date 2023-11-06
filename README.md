# 🤓 Reto UBITS

Bienvenido a tu reto REACT para crear un E-commerce, para nosotros es un gusto que puedas poner a prueba tus los conocimientos que vienes aprendiendo en nuestros curso de React y Typescript.

## ☑️ Requisitos para realizar el reto

- tener instalado node v16 o superior
- tener instalado npm 8 o superior
- tener un un powerShell, shell o terminal con el cual ejecutar lineas de comandos
- tener un editor de código donde realizar el reto (ej: visual studio code)
- tener cuenta de gitHub activa

## ⏲ Setup del reto

Para poder solucionar este reto de una manera correcta debes seguir los siguientes pasos:

### 1. Clonar el reto localmente

Primero debes clonar el reto en tu maquina para que puedas acceder a la información del reto y su estructura, para esto escribe el siguiente comando en tu shell:

**Si tienes configurada una llave SSH**

```bash
git clone **PONER URL**
```

**para clonarlo por HTTPS**

```bash
git clone **PONER URL**
```

### 2. Instalar dependencias

luego de clonarlo accede a la carpeta que acabas de clonar e instala las dependencias necesarias para el reto (si no conoces el concepto de dependencias no te preocupes no es necesario conocer su funcionamiento para resolver el reto) para esto escribe en tu shell:

```bash
cd Reto_React_TS
```

```bash
npm install
```

✅ listo con estos pasos estas listo para iniciar tu reto mucha suerte ¡¡¡

### 🗒 Estructura del reto

Este proyecto esta basado en React como framework principal y cuenta con una estructura típica de este framework:

- **INSTRUCTIONS.md**: este [archivo](./INSTRUCTIONS.md) contiene las instrucciones para resolver el reto por favor léelo cuidadosamente.

- **assets:** en este folder se encuentran todas las imágenes, estáticas que están siendo usadas en nuestro e-commerce
- **components:** siguiendo la estructura de diseño atómico podrás ver en este folder todos los componentes usados por las paginas `Home` y `ProductDetails`, dentro de este folder existen varios componentes que cuentan con la misma estructura.
  - **Footer:** en general los folders de los componentes tienen la misma estructura, in `index.tsx` que es un archivo de typescript, en cual contiene la lógica del componente y un archivo `.css` que contiene los estilos del componente
- **pages:** esta carpeta contiene los archivos de las paginas disponibles en nuestra aplicación.
- **App.tsx:** es el archivo de entrada a nuestra aplicación en la cual se renderizaran las paginas creadas en la app

ademas de estas carpetas podrás ver otros archivos como:

- .gitignore
- tsconfig.json
- vite.config.ts
- package.json

no te preocupes por estos archivo

### :gear: como hacer el setup del reto, correrlo y validar los cambios:

para poder correr este reto localmente debes correr en tu shell el comando

```bash
npm run dev
```

esto inicia un nuestro servidor el cual por defecto sera:

```bash
http://localhost:5173/
```

### 🚀 ¿Como probar los servicios expuestos en mi API?

existen diferentes maneras de realizar peticiones a nuestro servidor local pero para este caso recomendaremos el uso de [postman](https://learning.postman.com/docs/getting-started/overview/) que es un software libre que permite el envió de peticiones a servidores remotos o locales, [acá](https://learning.postman.com/docs/sending-requests/requests/) podrás ver algunos ejemplos de como realizar dichas peticiones. Como lo mencionamos anteriormente existen multiples maneras de realizar peticiones a nuestro servidor de tal manera que si conoces alguna forma distinta puedes utilizarla con toda libertad.

Ademas de esto es necesario que nuestro backend permita recibir peticiones a servidores fuera de nuestro dominio a esto se le conoce como la política CORS de datos e información, esta acción no esta permitida por defecto en express de tal manera que debemos habilitar dicha opción para esto debemos ir a nuestra carpeta del reto backend correr el siguiente comando:

```bash
npm install cors
```

y luego en nuestro index.js colocar las siguientes lineas de código:

```js
var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
```

puedes encontrar mas información sobre las políticas CORS y como permitir peticiones para servidores externos en el siguiente [link](https://expressjs.com/en/resources/middleware/cors.html).

### 🎯 ¿Cuando completo el reto?

lee las instrucciones del reto disponibles en el archivo [INSTRUCTIONS.md](./INSTRUCTIONS.md), en este archivo podrás las instrucciones necesarias para completar el reto completamente donde el resultado final sera una API para un E-commerce utilizando, nodejs, express, SQLite.

# 🥳 ¡Buena suerte! 🥳
