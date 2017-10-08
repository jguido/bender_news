const express = require('express');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');
const request = require('request');

const io = require('socket.io')(server);
const config = require('./src/config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

server.listen();
server.on('listening', () => {
    console.log(`${server.address().port} in ${app.get('env')} mode.`);

    const registerToMotherlord = () => {
        const uri = `${config.swarm.motherlord}/register/service/news/${server.address().port}`;
        console.log(`attempt to register to motherlord : ${uri}`);
        request.put(uri, (err, res) => {
            if(err) {
                console.log(err);
                console.log("Error connecting to motherlord");
            }
        });

    };
    registerToMotherlord();
    setInterval(registerToMotherlord, 15*1000);
});



