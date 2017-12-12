/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
  
    var speech = "";
  
    
    let pillToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.movie ? req.body.result.parameters.pill : 'TYLENOL80';
    let reqUrl = encodeURI('http://apis.data.go.kr/1470000/MdcinGrnIdntfcInfoService/getMdcinGrnIdntfcInfoList?ServiceKey=%2BgdsySGX%2Bef5%2F%2F17a%2FV7xyOYjAqEJTHbuy0v%2B8wJZZRHpZcVWoxHeYtWWIaevzSo7%2Ftu3T%2B%2F5lWlN3hG93%2BePw%3D%3D&item_name=' + pillToSearch);
    http.get(reqUrl, (responseFromAPI) => {
      
      
    if(req.body.result.action == 'pill.find') {
      var name = pill.name;

      
      speech = ITEM_NAME + ' is a ' + COLOR_CLASS1 + ' color ' + DRUG_SHAPE+'shape' + CLASS_NAME + ' effect ';
      
      return res.json({
          speech: speech,
          displayText: speech,
          source: 'apiai-Kkyull'
      });

    }

    else {
      return res.json({
          speech: "speech",
          displayText: speech,
          source: 'apiai-Kkyull'
      });

};
});


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
