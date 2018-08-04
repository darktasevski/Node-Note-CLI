const person = {
	name: 'Darko',
};
person.age = 27;

person.name = 'Darkø';

console.log(person);

// then
// node inspect debugger.js

// list(10) - 10 is the number of lines you want to view

// n or next

// --inspect-brk to use chrome for debugging
// go to chrome://inspect to access it
