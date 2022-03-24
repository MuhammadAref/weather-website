const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibXVoYW1tYWQtYXJlZiIsImEiOiJjbDB5ZW45dHQxZTAzM2JrYmV6ZzhtZjV4In0.1mMHwgrboAgzF2pEg1k7TA&limit=1'
    
    request({url, json : true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }
        else if (!body.features.length) {
            callback('Cannot find that location!', undefined)
        }
        else {
            callback(undefined, {
                lat : body.features[0].center[1],
                long : body.features[0].center[0],
                location : body.features[0].place_name
            })
        }
    })
}

module.exports = geocode