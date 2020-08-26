const fs = require('fs')
const chalk = require('chalk')

const getNote = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicate = notes.find((note) => note.title === title)

    if(!duplicate){
        notes.push({
            title : title,
            body : body
        })
        
        saveNote(notes)
        
        console.log('New note added!')
    }else{
        console.log('Note title taken')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    notesToKeep.length === notes.length ? console.log(chalk.red('No note found!')) : console.log(chalk.green('Note removed!'))

    saveNote(notesToKeep)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse('Your Notes:'))
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const findNote = notes.find(note => note.title === title)

    if(findNote){
        console.log(chalk.blueBright(findNote.title) + ' ' + findNote.body)
    }else{
        console.log(chalk.red('No note found?'))
    }
}

const saveNote = (notes) => {
    const input = JSON.stringify(notes)
    fs.writeFileSync('notes.json', input)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = JSON.parse(dataBuffer.toString())

        return dataJSON
    } catch (error) {
        return []
    }
}

module.exports = {
    getNote : getNote,
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}
