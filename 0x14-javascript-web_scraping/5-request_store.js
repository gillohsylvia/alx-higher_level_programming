#!/usr/bin/node

const args = process.argv;
const request = require('request');
const fs = require('fs');

request.get(args[2], function (error, response, body) {
  if (!error) {
    fs.writeFile(args[3], body, 'utf-8', (err) => {
      if (err) {
        console.error(err);
      }

      // console.log(body)
    });
  }
});
