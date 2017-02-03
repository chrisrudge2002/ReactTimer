const $ = require('jQuery');
const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const Clock = require('Clock');

describe('Clock', () => {
	it('should exist', () => {
		expect(Clock).toExist();
	});

	describe('render', () => {
		it('should render clock to output', () => {
			const clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
			const $el = $(ReactDOM.findDOMNode(clock));
			const actualText = $el.find('.clock-text').text();

			expect(actualText).toBe('01:02');
		});
	});

	describe('formatSeconds', () => {
		it('should format seconds', () => {
			const clock = TestUtils.renderIntoDocument(<Clock/>);
			const seconds = 615;
			const expected = '10:15';
			const actual = clock.formatSeconds(seconds);

			expect(actual).toBe(expected);
		});

		it('should format seconds when min/sec are less than 10', () => {
			const clock = TestUtils.renderIntoDocument(<Clock/>);
			const seconds = 61;
			const expected = '01:01';
			const actual = clock.formatSeconds(seconds);

			expect(actual).toBe(expected);
		});
	});
});
