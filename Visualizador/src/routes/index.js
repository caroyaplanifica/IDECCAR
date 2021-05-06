const router = require('express').Router();

//PostgreSQL and Postgis module and connection setup
const {Client, Query} = require('pg');

//Setup connection
var username = "postgres"
var password = "Postgis/ServidorIDE-Caroya"
var host = "200.110.196.229:5433"
var database = "db_sig"
var conString = "postgres://"+username+":"+password+"@"+host+"/"+database;

router.get('/', (req, res) =>{
    res.render('index');
});


module.exports = router;