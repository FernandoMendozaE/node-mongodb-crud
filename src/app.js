// * Configuración de app.js
import express from 'express' // ? LLamada de la funcion express
import indexRoutes from './routes/index.routes' //? Importamos el archivo index.routes.js
import path from 'path' // ? Importamos el archivo path que nos permite acceder a la ruta de nuestra carpeta public
import { create } from 'express-handlebars' // ? Importamos la funcion create de express-handlebars
// import exphbs from 'express-handlebars' // ? Importamos el archivo express-handlebars
import morgan from 'morgan' // ? Importamos el archivo morgan

const app = express()

// ! Configuración de handlebars
app.set('views', path.join(__dirname, 'views')) // ? Definir la ruta de las vistas views
app.engine(
  //? Configuración del motor de plantilla handlebars
  '.hbs',
  create({
    layoutsDir: path.join(app.get('views'), 'layouts'), //? Definir la ruta de los layouts
    partialsDir: path.join(app.get('views'), 'partials'), // ? Definir la ruta de los partials
    defaulLayout: 'main',
    extname: '.hbs',
  }).engine
)
app.set('view engine', '.hbs') // ? Configuramos el motor de vistas para utilizar handlebars

app.use(morgan('dev')) // ? Configuramos morgan para ver las peticiones en consola
app.use(express.urlencoded({ extended: false })) // ? Configuramos express para que acepte formularios

// ! Rutas del servidor
app.use(indexRoutes)

app.use(express.static(path.join(__dirname, 'public'))) // ? Configuramos la carpeta public para que sea accesible desde el navegador

export default app
