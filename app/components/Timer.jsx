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
	componentWillUnmount: function() {
		this.stopTimer();
	},
	handleStatusChange(newStatus) {
		switch (newStatus)
		{
			case 'started':
				this.setState({timerStatus: 'started'});
				this.startTimer();
				break;
			case 'paused':
				this.setState({timerStatus: 'paused'});
				this.stopTimer();
				break;
			case 'stopped':
				this.setState({
					count: 0,
					timerStatus: 'stopped'
				});
				this.stopTimer();
				break;
		}
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
