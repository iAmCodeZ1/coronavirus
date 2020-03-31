const express = require('express');
var request = require('request');
const router = express.Router();
var options = {
    'method': 'GET',
    'url': 'https://coronavirus.riyenz.com/data/stats.json',
    'headers': {
    },
    form: {

    }
};


router.get('/', (req, res) => {
    
    request(options, function (error, response) { 
        if (error) throw new Error(error);
            res.status(200).json(JSON.parse(response.body));
        });
});

module.exports = router;