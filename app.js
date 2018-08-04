const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
	describe: 'Title of the note',
	demand: true,
	alias: 't',
};

const argv = yargs
	.command('add', 'Add a new note', {
		title: titleOptions,
		body: {
			describe: 'Note content',
			demand: true,
			alias: 'b',
		},
	})
	.command('remove', 'Remove note', {
		title: titleOptions,
	})
	.command('read', 'Read note', {
		title: titleOptions,
	})
	.command('list', 'View all notes', {})
	.help().argv;
const command = argv._[0];

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log(`Note created. Title: ${note.title}, body: ${note.body}`);
	} else {
		console.log('Note already exists');
	}
} else if (command === 'read') {
	const note = notes.getNote(argv.title);
	if (note) {
		console.log(note);
	} else {
		console.log('There is no note with that title');
	}
} else if (command === 'remove') {
	const removed = notes.removeNote(argv.title);

	if (removed) {
		console.log('Note removed');
	} else {
		console.log('There is no note with that title');
	}
} else if (command === 'list') {
	const list = notes.getAll();
	if (list.length) {
		list.forEach(note => {
			console.log(note);
		});
	} else {
		console.log('You have no notes');
	}
} else {
	console.log('No argument or not recognized');
}

// const user = os.userInfo();
// console.log('Starting app.js');

// fs.appendFile('greetings.txt', `Hello ${user.username} \n`, err => {
// 	if (err) {
// 		console.log('Unable to write to file');
// 	}
// });
// or
// fs.appendFileSync('greetings.txt', 'Hello World');
