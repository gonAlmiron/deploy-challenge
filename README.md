# 42i Tech Challenge: Locations

## Introducción

El objetivo de esta API será resolver las consultas iniciales que tiene un proyecto de sitio web de coach surfing, a través de un gestor de locaciones que permita analizar métricas y estadísticas de acuerdo a un conjunto de locaciones cargadas.

La idea del gestor es poder responder las dos siguientes preguntas que Jorge y Gastón se formularon ni bien comenzaron el emprendimiento:

Nombre de la locality que cuenta con la mayor cantidad de neighborhood cargados en el gestor.
Listado de locaciones del tipo place los cuales se encuentran a 50km a la redonda de la lat/lng de la region más al sur del globo terraqueo que se haya cargado al gestor.

Todos los pedidos son devueltos en formato JSON.

## Instalación

git clone https://github.com/gonAlmiron/locations-tech-challenge

cd locations-tech-challenge

npm install

npm start

### Dependencias y versiones instaladas en la api:

node: "18.12.1"
npm: "8.19.2"
nodemon: "2.0.22"
chai: "4.3.7",
chai-http: "4.3.0",
compression: "1.7.4",
cors: "2.8.5",
dotenv: "16.0.3",
eslint: "8.39.0",
express: "4.18.2",
geo-point: "2.0.2",
geolib: "3.3.3",
mocha: "10.2.0",
morgan: "1.10.0",
swagger-jsdoc: "6.2.8",
swagger-ui-express: "4.6.2",
winston": "3.8.2"

## Documentación

La documentación esta realizada con Swagger, mediante la ruta '/docs'.
Desde allí es posible probar los endpoints donde se encuentran las respuestas a lo que se pidió.

## Deployment

La solución está en linea corriendo en una instancia AWS:


