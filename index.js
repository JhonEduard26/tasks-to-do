require('colors')
// const { showMenu, pause } = require('./helpers/messages')
const { inquirerMenu, pause } = require('./helpers/inquirer')
console.clear()

const main = async () => {
  console.log('Inicio de la aplicacion')

  let opt = ''

  do {
    opt = await inquirerMenu()
    console.log({ opt })

    await pause()

    // if (opt !== '0') await pause()
  } while (opt !== '0')
}

main()
