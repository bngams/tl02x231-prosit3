const fs = require('fs');
const withSensor = require('./utils.js');


// generate to file
const outputFile = './sensors-data-realtime.json';

// types of sensors supported
const sensorTypes = 3;

// numbers of lines to generate
const volume = 50

function writeData() {
  const file = fs.createWriteStream(outputFile);
  file.write('[')
  for (let i = 0; i <= volume; i++) {
    const prefix = (i == 0) ? '' : ',\n';
    const json = JSON.stringify(withSensor(sensorTypes));
    file.write(prefix + json);
  }
  file.write(']');
  file.end();
}

writeData();