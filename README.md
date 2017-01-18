## Information
* Versión: Alpha
* Description: MEAN project for "Implementación e Implantación de Sistemas Software". Universidad de Cádiz (UCA)
* Project members: José Álvaro Gutiérrez Romero & Adrián Armida Mena
* Contact: gutimero92@gmail.com; adri.armida@gmail.com

This project uses the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**M**ongoose.js](http://www.mongoosejs.com) ([MongoDB](https://www.mongodb.com)): database
* [**E**xpress.js](http://expressjs.com): backend framework
* [**A**ngular 2](https://angular.io): frontend framework
* [**N**ode.js](https://nodejs.org): runtime environment
* [Angular CLI](https://cli.angular.io): project scaffolding
* [Bootstrap](http://www.getbootstrap.com): layout and styles
* [Font Awesome](http://fontawesome.io): icons

## Prerequisites
1. From project root folder install all the dependencies: `npm install`

## Run
1. Command window 1: `mongod`: run MongoDB
2. Command window 2: `mongoimport --db proyecto --collection jugadores --drop --file ~/jsonCollections/jugadores.json`. Do it with equipos and partidos collections.
3. Command window 3: `ng build -w`: build the project and keep watching the files for changes
4. Command window 4: `npm start`: run Express server
5. Go to [localhost:3000](http://localhost:3000)
5. Split in two windows: Administracion and default view (user view). Make updates on "Resultados" or "Clasificacion" for watching changes on user view  in real time. (Waiting for 5 s. to watch the changes)

