const express = require('express')

const app = express()

app.get('',(req, res) => {
    res.send('Hello World')
})

app.get('/product', (req, res) => {
    console.log(req.query.search)
    res.send({
        product: [req.query.search]
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})