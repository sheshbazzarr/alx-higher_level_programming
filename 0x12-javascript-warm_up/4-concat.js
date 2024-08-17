#!/usr/bin/node
// The 'process.argv' array contains the command-line arguments passed to the script
// Access the third and fourth elements (process.argv[2] and process.argv[3]) to retrieve the arguments to be printed.

const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Use template literals (backticks) to interpolate the values of 'arg1' and 'arg2' into the output string.

console.log(`${arg1} is ${arg2}`);

