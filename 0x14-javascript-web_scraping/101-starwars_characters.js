#!/usr/bin/node

const args = process.argv;
const request = require('request');

request.get(`https://swapi-api.alx-tools.com/api/films/${args[2]}`, function (error, response, body) {
  if (!error) {
    const data = JSON.parse(body);
    // console.log(data);
    const characters = data.characters;
    printCharName(characters, 0);
  }
});

function printCharName (characters, index) {
  request(characters[index], function (error, response, body) {
    if (!error) {
      console.log(JSON.parse(body).name);
      if (index + 1 < characters.length) {
        printCharName(characters, index + 1);
      }
    }
  });
}
