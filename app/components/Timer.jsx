const React = require('react');

const Clock = require('Clock');
const Controls = require('Controls');

const Timer = React.createClass({
	getInitialState: function() {
		return {
			count: 0,
			timerStatus: 'stopped'
		};
	},
	componentDidUpdate: function(prevProps, prevState) {
		if (prevState.timerStatus !== this.state.timerStatus) {
			switch (this.state.timerStatus)
			{
				case 'started':
					this.startTimer();
					break;
				case 'paused':
					this.stopTimer();
					break;
				case 'stopped':
					this.setState({count: 0});
					this.stopTimer();
					break;
			}
		}
	},
	componentWillUnmount: function() {
		this.stopTimer();
	},
	handleStatusChange(newStatus) {
		this.setState({timerStatus: newStatus});
	},
	startTimer: function() {
		this.timer = setInterval(() => {
			const newCount = this.state.count + 1;
			this.setState({
				count: newCount
			});
		}, 1000);
	},
	stopTimer: function() {
		clearInterval(this.timer);
		this.timer = undefined;
	},
	render: function() {
		const {count, timerStatus} = this.state;

		return (
			<div>
				<h1 className="page-title">Timer App</h1>
				<Clock totalSeconds={count}/>
				<Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
			</div>
		);
	}
});

module.exports = Timer;
