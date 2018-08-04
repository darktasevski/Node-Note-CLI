const fs = require('fs');

const originalNote = {
	title: 'Some title',
	body: 'Some body',
};
const stringifiedNote = JSON.stringify(originalNote);
// When using writeFile method, each write will erase all previous contents of the notes.json file
fs.writeFileSync('notes.json', stringifiedNote);

const noteStr = fs.readFileSync('notes.json');

const note = JSON.parse(noteStr);

console.log(note);
