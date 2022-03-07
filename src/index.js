import app from './app' // ? Importamos el archivo appi.js
import './database' // ? Importamos el archivo database.js
import { PORT } from './config' // ? Importamos el archivo config.js

// * Arranque de servidor
app.listen(PORT)
console.log('Server running on port', PORT)
