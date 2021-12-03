**Una api bastante sencilla que permite mostrar un texto enviado por el usuario usando la libreria COWSAY**

### Para ver el contenido de la vaca debe revisar la consola.

# Pasos para ejecutar el proyecto

## Instalar las librerias del proyecto
`npm install`

## Ejecutar el proyecto
`npm start`

----------
# Probando la API sin Docker

**Colocar en el navegador la siguiente URL.**
>Metodo GET http://localhost:3000/api/say/[texto_a_mostrar]

>Metodo POST http://localhost:3000/api/say (El texto a mostrar va por el body con la propiedad text)

`{ "text": "texto a mostrar" }`

----------
# Como usar el proyecto con Docker

## Ejecutar el comando
`docker build -t [nombre del contenedor] .`

**Usar el id que genero la construcción para ejecutar el proyecto**

## Para ver las imagenes creadas (nos interesa el IMAGE ID)
`docker images`
## Ejecutar el proyecto
`docker run -it -p 4200:3000 [colocar el id de la imagen]`

----------
# Probando la API con Docker
>Metodo GET http://localhost:4200/api/say/[texto_a_mostrar]

>Metodo POST http://localhost:4200/api/say (El texto a mostrar va por el body con la propiedad text)