'use strict';

const express = require('express');
const service = express();
const commandFactory = require('./Command/commandFactory');

service.get('/service/news/:type', (req, res, next) => {
    if(err) {
        console.log(err);
        return res.sendStatus(500);
    }
    commandFactory(req.params.type)
        .then(result => res.json(result))
        .catch(e => {
            console.error(e);
            res.sendStatus(500);
        });

});

module.exports = service;

