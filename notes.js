const fs = require('fs')

const getNotes = () => {
    return 'Your notes...'
}

const addNotes = (title, body) => {
    const notes = loadNotes()

    const duplicate = notes.filter((note) => {
        return note.title === title
    })

    if(!duplicate.length){
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
    addNotes : addNotes
}
