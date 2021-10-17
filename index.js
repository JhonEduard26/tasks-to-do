require('colors')
// const { showMenu, pause } = require('./helpers/messages')
const { inquirerMenu, pause, readInput } = require('./helpers/inquirer')
const Tasks = require('./models/Tasks')
console.clear()

const main = async () => {
  console.log('Inicio de la aplicacion')

  let opt = ''
  const tasks = new Tasks()

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
        console.log(tasks._listado)
        break
    }

    await pause()

    // if (opt !== '0') await pause()
  } while (opt !== '0')
}

main()
