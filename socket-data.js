const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
    // ... options
});
const withSensor = require('./utils.js');
// types of sensors supported
const sensorTypes = 3;
// emit frequency (ms)
const frequency = 1000;

io.on("connection", (socket) => {
    // ... treatments
});

function startBroadcast() {
    console.log('start broadcasting data');
    broadcastData();
}

function broadcastData() {
    const data = withSensor(sensorTypes);
    console.log('new sensor data', JSON.stringify(data, Set_toJSON));
    io.emit('sensorData', JSON.stringify(data, Set_toJSON));
    setTimeout(broadcastData, frequency);
}

httpServer.listen(3000);

console.log('conected');
startBroadcast();

// allow to serialize set
function Set_toJSON(key, value) {
    if (typeof value === 'object' && value instanceof Set) {
        return [...value];
    }
    return value;
}
