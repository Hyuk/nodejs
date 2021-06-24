const fs = require('fs')

const dataBuffer = fs.readFileSync('first-json.json')
const dataJSON = dataBuffer.toString()
const book = JSON.parse(dataJSON)

book.title = 'The Silent Patient'
book.author = 'Alex Michaelides'

const bookJSON = JSON.stringify(book)
fs.writeFileSync('first-json.json',bookJSON)