/**
 * Stream examples or more complete article:
 * https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/
 */

const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    const src = fs.createReadStream('./sensors-data-realtime.json');
    src.pipe(res);
});

server.listen(8000);