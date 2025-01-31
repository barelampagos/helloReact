var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

var firstName = 'Bryan';
var message = 'This is the real msg';

// JSX Code --> JS XML
ReactDOM.render(
	<Greeter name={firstName} message={message} />,
	document.getElementById('app')
);
