const { SensorModel1, SensorModel2, SensorModel3 } = require('./models.js');
const SensorHandler = {};
let id = 0;

module.exports = function (types) {
    const sensorType = Math.floor(Math.random() * types) + 1;
    return SensorHandler[`sensor${sensorType}`]();
}




SensorHandler.sensor1 = function () {
    return new SensorModel1(
        incrementAndReuturnId(),
        makeName(10),
        [randomBetween(500), randomBetween(500), randomBetween(500)],
        randomBetween(500)
    );
}

SensorHandler.sensor2 = function () {
    return new SensorModel2(
        incrementAndReuturnId(),
        makeName(10),
        [{ value: randomBetween(500) }, { value: randomBetween(500) }]
    );

}

SensorHandler.sensor3 = function () {
    return new SensorModel3(
        makeComplexId(16),
        incrementAndReuturnId(),
        makeName(10),
        makeName(10),
        {
            pollution: [
                { value: randomBetween(500), timestamp: new Date().getTime() },
                { value: randomBetween(500), timestamp: new Date().getTime() }
            ]
        }

    );
}

function randomBetween(max) {
    return Math.floor(Math.random() * max) + 1;
}

function incrementAndReuturnId() {
    id += randomBetween(10);
    return id;
}

function makeComplexId(length) {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}

function makeName(length) {
    var result = [];
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}
