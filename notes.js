const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNotes = (title, body) => {
    const notes = loadNotes()

    const duplicate = notes.filter((note) => note.title === title)

    if(duplicate.length === 0){
        notes.push({
            title : title,
            body : body
        })
        
        saveNotes(notes)
        
        console.log('New note added!')
    }else{
        console.log('Note title taken')
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => {
        return note.title !== title
    })

    notesToKeep.length === notes.length ? console.log(chalk.red('No note found!')) : console.log(chalk.green('Note removed!'))

    saveNotes(notesToKeep)
}

const saveNotes = (notes) => {
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
    getNotes : getNotes,
    addNotes : addNotes,
    removeNotes : removeNotes
}
