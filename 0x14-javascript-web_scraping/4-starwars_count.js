#!/usr/bin/node

const args = process.argv;
const request = require('request');

request.get(args[2], (error, response, body) => {
  if (!error) {
    let count = 0;
    const jsonBody = JSON.parse(body);
    const objs = jsonBody.results;
    for (const obj of objs) {
      for (const chars of obj.characters) {
        if (chars.endsWith('/18/')) {
          count += 1;
        }
      }
    }
    console.log(count);
  }
}
);
