const https = require('https')

const url = 'https://api.darksky.net/forecast/6f44fdc56246aab1f07cdf0fdfa6ede4/37,127'

const request = https.request(url, (response) => {
    let data=''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end',() => {
        const body = JSON.parse(data)
        console.log(body.currently)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()