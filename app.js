const request = require('request');
const jsonfile = require('jsonfile');
var skip = 0;

var file = './files/test.json';

function makeRequest(year) {
  const url =  `https://www.phantasytour.com/api/bands/12/setlists/paged?`+
                `skip=${skip}&limit=100&timespan=past&year=${year}`;
  var file = `./files/${year}.json`;

  request(url, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    jsonfile.writeFileSync(file, body, (error) => {
    });
    year--;
    if (year > 1998) makeRequest(year);
  });
}

makeRequest(2017);
