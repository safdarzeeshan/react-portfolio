var React = require('react');
var Photos = require('../components/Photos');
var _ = require('lodash');

var PhotoGallery = React.createClass({

	componentWillMount: function() {
	},

	componentDidMount: function(){
		
	},


	render: function () {
		var photosList = _.map(this.props.state.entries, function(entry) {
			return <Photos src={entry.media$group} />;
		});

		return (
			<div className="display_section">
				<h2 className='photos_heading'>Photography and Design</h2>
				{ photosList }
			</div>
		);	
	}
});

module.exports = PhotoGallery;