const express = require('express');
const app = express();

const request = require("request");
let options = { method: 'GET',
url: 'https://api.authkey.io/request',
qs: 
{ authkey: 'f3d301a431277e28',
sms: 'Happy Birthday',
mobile: '3433692324',
country_code: '92',
sender: 'Ace Server' },
};

request(options, function (error, response, body) {
if (error) throw new Error(error);

console.log(body);

});





const port = 5000;
app.listen(port, console.log(`server is up on port ${port}`));