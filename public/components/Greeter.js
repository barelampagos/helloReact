function greeter() {
	document.write('From greeter function');
}

// Anyone who 'requires greeter' will get greeter() function
module.exports = greeter;
