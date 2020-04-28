var allNotes = () => {
    console.log("All notes");
}

var readNote = (title, body) => {
    console.log("title", title)
    console.log("body", body)
}

var createNote = (title, body) => {
    console.log("title", title)
    console.log("body", body)
}

var removeNote = (title, body) => {
    console.log("title", title)
}

module.exports = {
    allNotes,
    readNote,
    createNote,
    removeNote
}