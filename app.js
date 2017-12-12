
'use strict';

// [START app]
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.status(200).send('Hello, world!').end();
});

app.post('/get-pill-details', function(req, res){

    let pillToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.movie ? req.body.result.parameters.pill : 'TYLENOL80';
    let reqUrl = encodeURI('http://apis.data.go.kr/1470000/MdcinGrnIdntfcInfoService/getMdcinGrnIdntfcInfoList?ServiceKey=%2BgdsySGX%2Bef5%2F%2F17a%2FV7xyOYjAqEJTHbuy0v%2B8wJZZRHpZcVWoxHeYtWWIaevzSo7%2Ftu3T%2B%2F5lWlN3hG93%2BePw%3D%3D&item_name=' + pillToSearch);
    http.get(reqUrl, (responseFromAPI) => {
      
       responseFromAPI.on('data', function (chunk) {
            let pill = JSON.parse(chunk)['data'];
            let dataToSend = pillToSearch === ITEM_NAME + ' is a ' + COLOR_CLASS1 + ' color ' + DRUG_SHAPE+'shape' + CLASS_NAME + ' effect ';
            
           return res.json({
              speech: dataToSend,
              displayText: dataToSend,
              source: 'apiai-Kkyull'
      });
});
 }, (error) => {
        return res.json({
            speech: 'Something went wrong!',
            displayText: 'Something went wrong!',
            source: 'apiai-Kkyull'
        });
    });

// Start the server
server.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and running...");
});

});
// [END app]