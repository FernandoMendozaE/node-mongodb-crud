// * Configure database mongo
import { connect } from 'mongoose' // ? Importando libreria de mongoose
import { MONGODB_URI } from './config' // ? Importando archivo de configuracion';

// ? Conección a la base de datos (ejecución de la función connect)
;(async () => {
  try {
    const db = await connect(MONGODB_URI)
    console.log('DB connected to', db.connection.name)
  } catch (error) {
    console.log(error)
  }
})()
