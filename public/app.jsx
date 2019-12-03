var React = require('react');
var ReactDOM = require('react-dom');

var GreeterMessage = React.createClass({
	render: function() {
		var name = this.props.name;
		var message = this.props.message;

		return (
			<div>
				<h1>Hello {name}!</h1>
				<p>{message}</p>
			</div>
		);
	}
});

var GreeterForm = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault();

		var updates = {};

		var name = this.refs.name.value;
		var message = this.refs.message.value;

		if (name.length > 0) {
			this.refs.name.value = '';
			updates.name = name;
		}

		if (message.length > 0) {
			this.refs.message.value = '';
			updates.message = message;
		}

		this.props.onNewData(updates);
	},
	render: function() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<div>
					<input type='text' ref='name' placeholder='Enter Name' />
				</div>
				<div>
					<textarea placeholder='Enter Message' ref='message'></textarea>
				</div>
				<div>
					<button>Submit</button>
				</div>
			</form>
		);
	}
});

// React Component declaration
var Greeter = React.createClass({
	// Define behavior of Component

	// render - expects JSX code that gets rendered to browser
	render: function() {
		// Grabs fields from props
		var name = this.state.name;
		var message = this.state.message;

		// Can only return one Root element in render()
		return (
			<div>
				<GreeterMessage name={name} message={message} />
				<GreeterForm onNewData={this.handleNewData} />
			</div>
		);
	},
	// getDefaultProps - Set default props for use in app if none passed in at render
	getDefaultProps: function() {
		return {
			name: 'React',
			message: 'Component'
		};
	},
	// Custom app method
	handleNewData: function(updates) {
		// Updates any values initializes in the state
		this.setState(updates);
	},
	// getInitialState - React default method. Initializes starting state
	getInitialState: function() {
		return {
			// initializes this.state.name
			name: this.props.name,
			message: this.props.message
		};
	}
});

var firstName = 'Bryan';
var message = 'This is the real msg';

// JSX Code --> JS XML
ReactDOM.render(
	<Greeter name={firstName} message={message} />,
	document.getElementById('app')
);
