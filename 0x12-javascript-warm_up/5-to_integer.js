#!/usr/bin/node
// using the isNaN() function to check if the first argument (arg) can be converted to an integer.

const myNum = parseInt(process.argv[2]);

//jd
// dd
if (myNum === undefined || isNaN(myNum)) {
  console.log('Not a number');} 
// ted
else {
  console.log('My number: '.concat(myNum));
}
