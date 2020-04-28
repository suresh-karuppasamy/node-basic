const notes = require('./notes');

const yargs = require('yargs');

const argv = yargs.argv;

var command = argv._[0];

if(command === 'list') {
    notes.allNotes();
} else if(command === 'read') {
    notes.readNote(argv.title, argv.body);
} else if(command === 'create') {
    notes.createNote(argv.title, argv.body);
} else if(command === 'remove') {
    notes.removeNote(argv.title, argv.body);
} else {
    console.log("Command Not found")
}