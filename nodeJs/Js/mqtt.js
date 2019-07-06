function allumLed(){
    const mqtt = require('mqtt')
    var client  = mqtt.connect('mqtt:192.168.43.180')
    
    client.on('connect', function () {
        client.subscribe('inTopic', function (err) {
            if (!err) client.publish('inTopic', '0')     
        })
    })
    
    client.on('message', function (topic, message) {
        // message is Buffer
        console.log(message.toString())
        client.end()
    });
}

