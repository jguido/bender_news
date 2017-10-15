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

        const options = {
            method: 'PUT',
            uri: uri,
            body: {
                linked: ['types']
            },
            json: true // Automatically stringifies the body to JSON
        };
        console.log(`attempt to register to motherlord : ${uri}`);
        request(options, (err, res) => {
            if(err) {
                console.log(err);
                console.log("Error connecting to motherlord");
            }
        });

    };
    registerToMotherlord();
    setInterval(registerToMotherlord, 10*1000);
});

const commandFactory = require('./src/Command/commandFactory');
app.post('/service', (req, res, next) => {
    const type = req.body.news.types;

    console.log(`Asked for news : ${type}`);
    commandFactory(type)
        .then(result => res.json(result))
        .catch(e => {
            console.error(e);
            res.text(e).sendStatus(500);
        });

});



