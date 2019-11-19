// React Component declaration
var Greeter = React.createClass({
	// Define behavior of Component

	// render - expects JSX code that gets rendered to browser
	render: function() {
		// Grabs fields from props
		var name = this.props.name;
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
		var name = this.refs.name.value;
		alert(name);
	}
});

var firstName = 'Bryan';
var message = 'This is the real msg';

// JSX Code --> JS XML
ReactDOM.render(
	<Greeter name={firstName} message={message} />,
	document.getElementById('app')
);
