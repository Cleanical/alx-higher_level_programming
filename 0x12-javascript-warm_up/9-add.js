#!/usr/bin/node
/* a script that prints the addition of two integers */
const first = process.argv[2];
const second = process.argv[3];

const a = parseInt(first);
const b = parseInt(second);
function add (a, b) {
  return a + b;
}
console.log(add(a, b));
