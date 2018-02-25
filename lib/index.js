"use strict";

const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.Agent.createServer((req, res) => {
    req.url = url.parse(req.url);
    req.url.query = querystring.parse(req.ur.query);
    console.log('url', req.url);

    res.writeHead(200, {
        //'Content-Type" text/html; charset=utf-8
        //'Content-Type' : 'appication/json'
        'Content-Type': ''
    })

    req.on('data', (buf).toString() => {
        console.log('BUFFER:', buf.toString());

    res.write("hello!")
    res.write("there")
    res.write("new")
    res.write("user!")
    })
})

const PORT = process.ENV || 3000;
server.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
})
