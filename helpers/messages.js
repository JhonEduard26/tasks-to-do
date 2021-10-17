require('colors')

const showMenu = () => {
  return new Promise((resolve, reject) => {
    console.clear()
    console.log('======================='.blue)
    console.log(' Selecione una opción '.blue)
    console.log('=======================\n'.blue)

    console.log(`${'1.'.blue} Crear tarea`)
    console.log(`${'2.'.blue} Listar tareas`)
    console.log(`${'3.'.blue} Listar tareas completadas`)
    console.log(`${'4.'.blue} Listar tareas pendientes`)
    console.log(`${'5.'.blue} Completar tarea(s)`)
    console.log(`${'6.'.blue} Borrar tarea`)
    console.log(`${'0.'.blue} Salir\n`)

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    readline.question('Seleccione una opcion: ', (opt) => {
      readline.close()
      resolve(opt)
    })
  })
}

const pause = () => {
  return new Promise((resolve, reject) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    readline.question(`\nPresione: ${'ENTER'.blue} para continuar\n`, (opt) => {
      readline.close()
      resolve()
    })
  })
}

module.exports = {
  showMenu,
  pause,
}
