const notes = require('./notes');

console.log(notes.sum(4,2));

let command = process.argv[2];

if(command === 'list') {
    console.log('list')
} else if(command === 'read') {
    console.log('read')
} else {
    console.log("Command Not found")
}