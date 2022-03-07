import { Router } from 'express' // ? Importamos la funcion Router de Express
import {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToogleDone,
} from '../controllers/tasks.controller' // ? Importamos el controlador de tareas

const router = Router() // ? Creamos una instancia de Router

// ! Rutas del servidor
router.get('/', renderTasks) // * Ruta para obtener todas las tareas

router.post('/tasks/add', createTask) // * Ruta para crear una nueva tarea

router.get('/tasks/:id/edit', renderTaskEdit) // * Ruta para obtner la tarea

router.post('/tasks/:id/edit', editTask) // * Ruta para actualizar la tarea

router.get('/tasks/:id/delete', deleteTask) // * Ruta para eliminar la tarea

router.get('/tasks/:id/toggleDone', taskToogleDone) // * Ruta para cambiar el estado de la tarea

export default router
