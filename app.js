const yargs = require('yargs')
const notes = require('./notes.js')
const chalk = require('chalk')

// Customize yargs version
yargs.version('1.1.0')

// Create "Add" command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption : true, // Ensure title must be included in the command
            type: 'string'
        },
        body:{
            describe: ' body Content',
            demandOption : true, // Ensure title must be included in the command
            type: 'string'
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
})

// Create "Remove" command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe : 'Note revmoved',
            demandOption : true,
            type : 'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
})

// Create "List" command
yargs.command({
    command: 'list',
    describe: 'List some notes',
    handler: () => notes.listNotes()
})

// Create "Read" command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title:{
            describe : 'Note read',
            demandOption : true,
            type : 'string'
        }
    },
    handler: (argv) => notes.readNote(argv.title)
})

yargs.parse()





