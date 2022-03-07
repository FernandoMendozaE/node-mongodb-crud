import Task from '../models/Task' // ? Importamos el modelo Task

// * Método que permite renderizar la vista de creación de tareas
export const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean() // ? Buscamos todas las tareas, lean() nos devuelve una lista de objetos sin formato
  console.log(tasks)
  res.render('index', { tasks }) // ? Renderizamos el archivo index.hbs con las tareas
}
// * Método que permite crear una nueva tarea
export const createTask = async (req, res) => {
  try {
    const task = Task(req.body) // ? Creamos una nueva tarea con los datos del formulario
    await task.save() // ? Guardamos la tarea
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
}
// * Método que permite renderizar la vista de edición de tareas
export const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean() // ? Buscamos la tarea por su id
    res.render('edit', { task }) // ? Renderizamos el archivo edit.hbs con la tarea
  } catch (error) {
    console.log(error)
  }
}

// * Método que permite actualizar una tarea
export const editTask = async (req, res) => {
  try {
    const { id } = req.params // ? Obtenemos el id de la tarea
    await Task.findByIdAndUpdate(id, req.body) // ? Actualizamos la tarea, findByIdAndUpdate(id, body) donde id es el id de la tarea y body es el nuevo body
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
}

// * Método que permite eliminar una tarea
export const deleteTask = async (req, res) => {
  const id = req.params.id // ? Obtenemos el id de la tarea
  await Task.findByIdAndDelete(id) // ? Eliminamos la tarea
  res.redirect('/')
}

// * Método que permite cambiar el estado de la tarea
export const taskToogleDone = async (req, res) => {
  const id = req.params.id // ? Obtenemos el id de la tarea
  const task = await Task.findById(id) // ? Buscamos la tarea por su id
  task.done = !task.done // ? Cambiamos el estado de la tarea
  await task.save() // ? Guardamos la tarea
  res.redirect('/')
}
