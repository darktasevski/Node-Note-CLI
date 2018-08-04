const fs = require('fs');

const fetchNotes = () => {
	try {
		const oldNotes = fs.readFileSync('notes.json');
		return JSON.parse(oldNotes);
	} catch (err) {
		return [];
	}
};
const saveNotes = notes => fs.writeFileSync('notes.json', JSON.stringify(notes));

module.exports.addNote = (title, body) => {
	const notes = fetchNotes();
	const note = {
		title,
		body,
	};
	const duplicates = notes.filter(note => note.title === title);

	if (!duplicates.length) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

module.exports.getAll = () => fetchNotes();

module.exports.getNote = title => {
	const notes = fetchNotes();
	const note = notes.find(note => note.title === title);
	return note;
};

module.exports.removeNote = title => {
	const notes = fetchNotes();
	const filteredNotes = notes.filter(note => note.title !== title);
	saveNotes(filteredNotes);

	return notes.length !== filteredNotes.length;
};
