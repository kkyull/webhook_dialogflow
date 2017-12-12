'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
//dependencies.js

const server = express();
server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(bodyParser.json());
// it.js

server.post('/get-pill-details', function(req, res){
    
    let pillToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.movie ? req.body.result.parameters.pill : 'TYLENOL80';
    let reqUrl = encodeURI('http://apis.data.go.kr/1470000/MdcinGrnIdntfcInfoService/getMdcinGrnIdntfcInfoList?ServiceKey=%2BgdsySGX%2Bef5%2F%2F17a%2FV7xyOYjAqEJTHbuy0v%2B8wJZZRHpZcVWoxHeYtWWIaevzSo7%2Ftu3T%2B%2F5lWlN3hG93%2BePw%3D%3D&item_name=' + pillToSearch);
    http.get(reqUrl, (responseFromAPI) => {

        responseFromAPI.on('data', function (chunk) {
            let pill = JSON.parse(chunk)['data'];
            let dataToSend = pillToSearch === 'TYLENOL80'? 'I don\t have the required info on that. Here\'s some info on \'TYLENOL80\' instead.\n' : '';
            dataToSend += Item_name + ' is a ' + COLOR_CLASS1 + ' color ' + DRUG_SHAPE+'shape' + CLASS_NAME + ' effect ';

            return res.json({
                speech: dataToSend,
                displayText: dataToSend,
                source: 'get-pill-details'
            });

        });
    }, (error) => {
        return res.json({
            speech: 'Something went wrong!',
            displayText: 'Something went wrong!',
            source: 'get-pill-details'
        });
    });
});

server.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and running...");
});
