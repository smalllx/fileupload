var express = require('express')
var cors = require('cors') //解决跨域问题
var router = require('./router')
var bodyParser = require('body-parser')
var app = express()

app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}))

app.use(bodyParser.urlencoded({extended:false})); //解析application/x-www-form-urlencoded
app.use(bodyParser.json()) //解析application/json

app.use(router)
var server = app.listen(8081, function() {
    console.log('server is running...')
})
