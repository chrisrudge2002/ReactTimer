const React = require('react');

const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

const Countdown = React.createClass({
	getInitialState: function() {
		return {
			count: 0,
			countdownStatus: 'stopped'
		};
	},
	componentDidUpdate: function(prevProps, prevState) {
		if (prevState.countdownStatus !== this.state.countdownStatus) {
			switch (this.state.countdownStatus)
			{
				case 'paused': break;
				case 'started': this.startTimer(); break;
				case 'stopped': break;
			}
		}
	},
	startTimer: function() {
		this.timer = setInterval(() => {
			const newCount = this.state.count - 1;
			this.setState({
				count: newCount >= 0 ? newCount : 0
			});
		}, 1000);
	},
	handleSetCountdown: function(seconds) {
		this.setState({
			count: seconds,
			countdownStatus: 'started'
		});
	},
	render: function() {
		const {count} = this.state;

		return (
			<div>
				<Clock totalSeconds={count}/>
				<CountdownForm onSetCountdown={this.handleSetCountdown}/>
			</div>
		);
	}
});

module.exports = Countdown;
