#!/usr/bin/node
/* a script that prints a message depending on
 * the number of arguments passed.
 */

const args = process.argv;
if (args.length <= 2) {
  console.log('No argument found');
} else if (args.length === 3) {
  console.log('Argument found');
} else if (args.length >= 4) {
  console.log('Arguments found');
}
