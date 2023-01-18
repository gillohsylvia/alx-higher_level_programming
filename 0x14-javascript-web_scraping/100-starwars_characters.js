#!/usr/bin/node

const args = process.argv;
const request = require('request');

request.get(`https://swapi-api.alx-tools.com/api/films/${args[2]}`, function (error, response, body) {
  if (!error) {
    const data = JSON.parse(body);
    // console.log(data);
    const characters = data.characters;
    // console.log(characters);
    for (const chars of characters) {
      // console.log(chars);
      request.get(chars, (error, response, body) => {
        if (!error) {
          const charName = JSON.parse(body);
          console.log(charName.name);
        }
      });
    }
  }
});
