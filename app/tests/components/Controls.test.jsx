const $ = require('jQuery');
const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const Controls = require('Controls');

describe('Controls', () => {
	it('should exist', () => {
		expect(Controls).toExist();
	});

	describe('render', () => {
		it('should render pause button when started', () => {
			const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" onStatusChange={() => {}}/>);
			const $el = $(ReactDOM.findDOMNode(controls));
			const $pauseButton = $el.find('button:contains(Pause)');

			expect($pauseButton.length).toBe(1);
		});

		it('should render start button when pasued', () => {
			const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" onStatusChange={() => {}}/>);
			const $el = $(ReactDOM.findDOMNode(controls));
			const $startButton = $el.find('button:contains(Start)');

			expect($startButton.length).toBe(1);
		});
	});
});
