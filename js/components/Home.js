var React = require('react');

var Home = React.createClass({

	componentDidMount: function(){

	    console.log(this.props);
	    if(!this.props.state.videoPlayed) {
	    	document.getElementById('bgvid').addEventListener('ended',this.videoEnd);
	    }
	    else {
	    	console.log('video has played, just show me some content');
	    	$('.video').hide();
	    }

  	},

  	// componentDidMount: function(){

	  //   console.log(this.props);
	  //   if(this.props.state.videoPlayed) {
	  //   	console.log('video has played, just show me some content');
	  //   	$('.video').hide();

	  //   }
	  //   else {
	  //   	console.log('video has not played');
	  //   }

  	// },

  	videoEnd: function(){

	    $('.video').addClass('off');
	    this.props.videoFinished(true);
  	},

  	screenUp: function(){
	    $('.video').addClass('off');
	    this.props.videoFinished(true);

  	},

	render: function () {
	return (
		 <div>
		   	<div className='video'>
		      <video autoPlay poster="/media/video.png" id="bgvid">
		        <source src="/css/media/name.mp4" type="video/mp4" />
		      </video>
		    </div>
		 	<div className='display_section'>
		 		<div className ='aboutme_image'>
		 		</div>
		 		<div className='aboutme_text'>
		 			<p>Introduce yourself.</p>
		 		</div>
		 	</div>
		 </div>
		);
	}
});

module.exports = Home;