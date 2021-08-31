var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');
var dbconfig = require('./../helper/database.js');

var pool = mysql.createPool(dbconfig);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add', async (req, res) => {

    let username = req.body.username; 
    let message = req.body.message;

    let insertMessageQ = "INSERT INTO messages (username, message) VALUES (?, ?)";
    let insertMessageResult = await pool.query(insertMessageQ, [username, message]);

    res.json({status: "success"});
});

router.get('/read', async (req, res) => {

    let selectMessageQ = "SELECT * FROM messages"; 
    let selectMessageResult = await pool.query(selectMessageQ); 

    res.header("Access-Control-Allow-Origin", "*");
    res.json({
        status : "success", 
        data: selectMessageResult[0]
    });
})



module.exports = router;
