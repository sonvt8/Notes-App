const chalk = require('chalk')
const yargs = require('yargs')
const validator = require('validator')

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
    handler: (argv) => {
        console.log('Title:', argv.title)
        console.log('Body:', argv.body)
    }
})

// Create "Remove" command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => console.log('Removing a note!')
})

// Create "List" command
yargs.command({
    command: 'list',
    describe: 'List some notes',
    handler: () => console.log('Listing out all notes!')
})
/*
    Command: node app list
    Return:
    Listing out all notes!
    { _: [ 'list' ], '$0': 'app' }
*/

// Create "Read" command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => console.log('Reading a note!')
})
/*
    Command: node app read
    Return:
    Reading a note!
    { _: [ 'read' ], '$0': 'app' }
*/

yargs.parse()





