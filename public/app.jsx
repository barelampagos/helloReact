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
				<h1>Hello {name}!</h1>
				<p>{message}</p>

				<form onSubmit={this.onButtonClick}>
					<input type='text' ref='name' />
					<button>Set Name</button>
				</form>
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
	onButtonClick: function(e) {
		// Prevents default behavior of form submit & page refresh
		e.preventDefault();

		// Fetches value from HTML element with ref = name
		var nameRef = this.refs.name;
		var name = this.refs.name.value;
		nameRef.value = ''; // Clears input field

		if (typeof name == 'string' && name.length > 0) {
			// Updates any values initializes in the state
			this.setState({
				name: name
			});
		}
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
