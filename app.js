const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes');

const res = notes.addNote();

console.log('res', res);

// const user = os.userInfo();
// console.log('Starting app.js');

// fs.appendFile('greetings.txt', `Hello ${user.username} \n`, err => {
// 	if (err) {
// 		console.log('Unable to write to file');
// 	}
// });
// or
// fs.appendFileSync('greetings.txt', 'Hello World');
