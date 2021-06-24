const request = require('request')

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic21pbGVodWdvIiwiYSI6ImNrNTF0N3E4czEwaXMzbnFmbnJyanF6NHQifQ.tj1M1aBVjyV938oDRUrgxg&limit=1'

request({url: geocodeURL, json: true}, (error, response) => {
    const latitude = response.body.features[0].geometry.coordinates[1];
    const longitude = response.body.features[0].geometry.coordinates[0];
    console.log(latitude, longitude)
})