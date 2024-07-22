#!/usr/bin/node
/* a script that searches the second biggest integers in
 * a list of arguments */
const args = process.argv;

if (args.length <= 3) {
  console.log('0');
} else {
  let second = parseInt(args[2]);
  let highest = parseInt(args[3]);
  for (let i = 2; i < args.length; i++) {
    const current = parseInt(args[i]);
    if (current > highest) {
      second = highest;
      highest = current;
    } else if (current > second && current < highest) {
      second = current;
    }
  }
  console.log(second);
}
