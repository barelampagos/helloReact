// React Component declaration
var Greeter = React.createClass({
	// Define behavior of Component

	// render - expects JSX code that gets rendered to browser
	render: function() {
		// Grabs name from props
		var name = this.props.name;
		var message = this.props.message;

		// Can only return one Root element in render()
		return (
			<div>
				<h1>Hello {name}!</h1>
				<p>{message}</p>
			</div>
		);
	},
	// Set default props for use in app if none passed in at render
	getDefaultProps: function() {
		return {
			name: 'React',
			message: 'Component'
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
