const Task = require('./Task')

class Tasks {
  _listado = {}

  constructor() {
    this._listado = {}
  }

  createTask(desc = '') {
    const task = new Task(desc)
    this._listado[task.id] = task
  }
}

module.exports = Tasks
