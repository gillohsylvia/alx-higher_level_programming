#!/usr/bin/node
const args = process.argv;
const request = require('request');

request.get(args[2], function (error, response, body) {
  if (!error) {
    const userTask = {};
    const data = JSON.parse(body);
    for (const task of data) {
      if (task.completed) {
        if (task.userId in userTask) {
          userTask[task.userId]++;
        } else {
          userTask[task.userId] = 1;
        }
      }
    }
    console.log(userTask);
  }
  // console.log(userTask);
});
