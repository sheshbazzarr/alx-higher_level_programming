#!/usr/bin/node

// Calculate the number of arguments passed to the script using 'process.argv.length - 2'
// Subtract 2 to exclude the 'node' command and the name of the script itself

const argsCount = process.argv.length - 2;

// Use an 'if...else' statement to check the value of 'argsCount'
// Use 'console.log' to print the appropriate message

if (argsCount === 0) {
  console.log('No argument');
} else if (argsCount === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}

