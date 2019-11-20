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

		var name = this.refs.name.value;

		if (name.length > 0) {
			this.refs.name.value = '';

			// Calls handleNewName()
			this.props.onNewName(name);
		}
	},
	render: function() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type='text' ref='name' />
				<button>Set Name</button>
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
		var message = this.props.message;

		// Can only return one Root element in render()
		return (
			<div>
				<GreeterMessage name={name} message={message} />
				<GreeterForm onNewName={this.handleNewName} />
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
	handleNewName: function(name) {
		// Updates any values initializes in the state
		this.setState({
			name: name
		});
	},
	// getInitialState - React default method. Initializes starting state
	getInitialState: function() {
		return {
			// initializes this.state.name
			name: this.props.name
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
