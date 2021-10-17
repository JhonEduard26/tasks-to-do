const inquirer = require('inquirer')
require('colors')

const questions = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Que desea hacer?',
    choices: [
      {
        value: '1',
        name: '1. Crear tarea',
      },
      {
        value: '2',
        name: '2. Listar tarea',
      },
      {
        value: '3',
        name: '3. Listar tareas completadas',
      },
      {
        value: '4',
        name: '4. Listar tareas pendientes',
      },
      {
        value: '5',
        name: '5. Completar tarea(s)',
      },
      {
        value: '6',
        name: '6. Borrar tarea',
      },
      {
        value: '0',
        name: '0. Salir',
      },
    ],
  },
]

const inquirerMenu = async () => {
  console.clear()
  console.log('======================='.blue)
  console.log(' Selecione una opción ')
  console.log('=======================\n'.blue)

  const { opcion } = await inquirer.prompt(questions)

  return opcion
}

const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'ENTER'.blue} para continuar`,
    },
  ]
  console.log('\n')
  await inquirer.prompt(question)
}

const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.trim().length === 0) {
          return 'Por favor ingrese un valor'
        }

        return true
      },
    },
  ]

  const { desc } = await inquirer.prompt(question)
  return desc
}

module.exports = {
  inquirerMenu,
  pause,
  readInput,
}
