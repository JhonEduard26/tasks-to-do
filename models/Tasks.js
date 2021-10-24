const Task = require('./Task')

class Tasks {
  _listado = {}

  get listadoArr() {
    const listado = []
    Object.keys(this._listado).forEach((key) => {
      const task = this._listado[key]
      listado.push(task)
    })

    return listado
  }

  constructor() {
    this._listado = {}
  }

  createTask(desc = '') {
    const task = new Task(desc)
    this._listado[task.id] = task
  }

  loadTasksFromArray = (tasks = []) => {
    tasks.forEach((task) => {
      this._listado[task.id] = task
    })
  }

  deleteTask(id = '') {
    if (this._listado[id]) {
      delete this._listado[id]
    }
  }

  fullList() {
    console.log()

    Object.keys(this._listado).forEach((key, i) => {
      const ind = `${i + 1}.`.blue
      const { desc, completedIn } = this._listado[key]
      const estado = completedIn !== null ? 'Completada'.green : 'Pendiente'.red

      console.log(`${ind} ${desc} :: ${estado}`)
    })
  }

  listCompletedPending(completed = true) {
    console.log()

    let count = 0
    Object.keys(this._listado).forEach((key) => {
      const { desc, completedIn } = this._listado[key]
      const estado = completedIn !== null ? 'Completada'.green : 'Pendiente'.red

      if (completed) {
        if (completedIn) {
          count += 1
          console.log(`${(count + '.').blue} ${desc} :: ${completedIn.blue}`)
        }
      } else {
        if (!completedIn) {
          count += 1
          console.log(`${(count + '.').blue} ${desc} :: ${estado}`)
        }
      }
    })
  }

  toggleCompleted = (ids = []) => {
    ids.forEach((id) => {
      const task = this._listado[id]
      if (!task.completedIn) {
        task.completedIn = new Date().toISOString()
      }
    })

    Object.keys(this._listado).forEach((key) => {
      const task = this._listado[key]
      if (!ids.includes(task.id)) {
        this._listado[task.id].completedIn = null
      }
    })
  }
}

module.exports = Tasks
