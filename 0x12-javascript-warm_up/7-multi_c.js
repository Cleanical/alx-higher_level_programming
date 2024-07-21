#!/usr/bin/node
/* a script that prints x times “C is fun” */
const x = process.argv[2];

if (x === undefined || isNaN(parseInt(x))) {
  console.log('Missing number of occurences');
} else {
  for (let i = 0; i < parseInt(x); i++) {
    console.log('C is fun');
  }
}
