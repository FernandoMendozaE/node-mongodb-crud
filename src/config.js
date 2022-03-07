import { config } from 'dotenv' // ? Importando libreria de dotenv

config() // ? Lee el archivo .env y lo almacena en un objeto

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/test' // ? Variable de entorno de mongoDB

export const PORT = process.env.PORT || 3000 // ? Variable de entorno de puerto
