const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send('<h1>I am Iron Man</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>This is About Page</h1>')
})

app.listen(3000, () => {
    console.log('I love you 3000')
})