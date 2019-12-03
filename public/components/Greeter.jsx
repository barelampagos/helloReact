var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

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

module.exports = Greeter;
