#!/usr/bin/node
// Read from file


<<<<<<< HEAD
const filses = require('fs');
filses.readFile(process.argv[2], 'utf-8',
  (err, data) => {
======= 
const filesys = require('fs');
filesys.readFile(process.argv[2], 'utf-8',
  function (err, data) {
>>>>>>> 3d7bb2606b4b117788d4eeba754e5d905143d234
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
<<<<<<< HEAD
  });
  
=======
  });  
>>>>>>> 3d7bb2606b4b117788d4eeba754e5d905143d234
