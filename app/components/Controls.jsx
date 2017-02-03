const React = require('react');

const Controls = React.createClass({
	propTypes: {
		countdownStatus: React.PropTypes.string.isRequired
	},
	render: function() {
		const {countdownStatus} = this.props;
		const renderStartStopButton = () => {
			if (countdownStatus === 'started') {
				return <button className="button secondary">Pause</button>;
			} else if (countdownStatus === 'paused') {
				return <button className="button primary">Start</button>;
			}
		};

		return (
			<div className="controls">
				{renderStartStopButton()}
				<button className="button alert hollow">Clear</button>
			</div>
		);
	}
});

module.exports = Controls;
