const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    var request = require('request');
    var options = {
        'method': 'GET',
        'url': 'https://coronavirus.riyenz.com/data/stats.json',
        'headers': {
        },
        form: {

        }
    };
    request(options, function (error, response) { 
        if (error) throw new Error(error);
            res.status(200).json(JSON.parse(response.body));
        });
});

module.exports = router;