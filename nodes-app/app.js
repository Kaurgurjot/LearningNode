
const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe : 'Add a new note',
    builder :{
        title:{
            describe : 'Note title',
            demandOption : true,
            type: 'string'
        },
        body:{
            describe : 'Body of notes',
            demandOption : true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body)
    }
})


//Create Remove commad
yargs.command({
    command :'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe : 'Note title',
            demandOption : true,
            type: 'string'
        }
    },
    handler: function(argv){
       notes.removeNote(argv.title)
    }

})

//Create Read commad
yargs.command({
    command :'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading the note')
    }

})

//Create List commad
yargs.command({
    command :'list',
    describe: 'List a note',
    handler: function(){
        console.log('Listing out all notes')
    }

})

// console.log(yargs.argv)
yargs.parse()

// if(command === 'add'){
//     console.log('Adding note!')
// }else if(command === 'remove'){
//     console.log('Removing note!')
// }



////////////////File system module///////
// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Guru\r\n')

// fs.appendFileSync('notes.txt', 'First challenge')

///Calling function from other files
// const add = require('./utils.js')

// const sum = add(4,2)

// console.log(sum)

//////////validator///////////
// const validator = require('validator')

// console.log(validator.isEmail('gbandasha@dataseers.ai'))

// console.log(validator.isURL('https://dataseers.ai'))
