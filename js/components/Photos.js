var React = require('react');

var Photos = React.createClass({

	componentDidMount: function() {
		$('a[rel*=facebox]').facebox();

	},
	render: function () {

		return (
		<div className = 'photo'>
		 	<a href={this.props.src.media$content[0].url} rel="facebox">
		 	<img src={this.props.src.media$thumbnail[2].url}/>
		 	</a>
		</div>
		);
	}
});

module.exports = Photos;

