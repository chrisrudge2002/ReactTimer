const React = require('react');

const Main = (props) => {
	return (
		<div>
			<div>
				<div>
					<p>Main.jsx Rendered</p>
					{props.children}
				</div>
			</div>
		</div>
	);
};

module.exports = Main;
