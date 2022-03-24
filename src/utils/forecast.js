const request = require('postman-request')

const forecast = (lan, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=95a0a157c71ee335c3f3c28605f24fe1&query='+lan+','+long
    
    request({url, json : true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }
        else if (body.error) {
            callback('There is an error: '+body.error.type+', and its info: '+body.error.info, undefined)
        }
        else {
            callback(undefined, 'It\'s currently '+body.current.temperature+' degrees. And it feels like '+body.current.feelslike+ ' degrees')
        }
    })
}

module.exports = forecast