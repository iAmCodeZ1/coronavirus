const express = require('express');
var request = require('request');
const router = express.Router();
var options = {
    'method': 'GET',
    'url': 'https://bing.com/covid/data',
    'headers': {
      'Cookie': '_EDGE_S=F=1&SID=1BB94F2C4A3F6397346C41834B516294; _EDGE_V=1; MUID=398007A13AA96B3B02BD090E3BC76AB4; MUIDB=398007A13AA96B3B02BD090E3BC76AB4'
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