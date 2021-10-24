const fs = require('fs')

const path = './db/data.json'

const saveDB = (data) => {
  fs.writeFileSync(path, JSON.stringify(data))
}

const readDB = () => {
  try {
    if (!fs.existsSync(path)) {
      return null
    }

    const info = fs.readFileSync(path, { encoding: 'utf-8' })
    const data = JSON.parse(info)

    return data
  } catch (error) {
    console.log('Sucedio un error')
    throw error
  }
}

module.exports = {
  saveDB,
  readDB,
}
