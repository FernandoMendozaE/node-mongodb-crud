// * Importamos la libreria de mongoose
// * Schema: Es una estructura de datos
// * Model: Es una entidad de datos
import { Schema, model } from 'mongoose'

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true, // ? Campo obligatorio
      unique: true, // ? Campo único
      trim: true, // ? Elimina espacios en blanco
    },
    description: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false, // ? Valor por defecto
    },
  },
  {
    timestamps: true, // ? Crea dos campos de fecha de creación y actualización
    versionKey: false, // ? Deshabilita la versión de la entidad (no añade un campo de versión '__v')
  }
)

export default model('Task', taskSchema)
