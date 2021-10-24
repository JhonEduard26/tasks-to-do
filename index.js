require('colors')
const {
  inquirerMenu,
  pause,
  readInput,
  listTasksForDelete,
  confirm,
  showTasksCheckList,
} = require('./helpers/inquirer')
const { saveDB, readDB } = require('./helpers/saveFile')
const Tasks = require('./models/Tasks')
console.clear()

const main = async () => {
  let opt = ''
  const tasks = new Tasks()

  const tasksRead = readDB()

  if (tasksRead) {
    //Establecer las tareas
    tasks.loadTasksFromArray(tasksRead)
  }

  do {
    opt = await inquirerMenu()

    switch (opt) {
      case '1':
        //create task
        const description = await readInput('Descripción:')
        tasks.createTask(description)
        break
      case '2':
        // List tasks
        tasks.fullList()
        break
      case '3':
        tasks.listCompletedPending(true)
        break
      case '4':
        tasks.listCompletedPending(false)
        break
      case '5':
        const ids = await showTasksCheckList(tasks.listadoArr)
        console.log(ids)
        break
      case '6':
        const id = await listTasksForDelete(tasks.listadoArr)
        if (tasks.listadoArr.length === 0) {
          console.log('No hay tareas')
        } else {
          if (id !== '0') {
            const ok = await confirm('¿Esta seguro?')
            if (ok) {
              tasks.deleteTask(id)
              console.log('Tarea borrada!')
            }
          }
        }
        break
    }

    saveDB(tasks.listadoArr)

    await pause()

    // if (opt !== '0') await pause()
  } while (opt !== '0')
}

main()
