#!/usr/bin/node
// Read from file

const filses = require('fs');
filses.readFile(process.argv[2], 'utf-8',
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
  