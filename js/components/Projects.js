var React = require('react');

var Projects = React.createClass({
  render: function () {
    return (
      <div>
      	<div className='display_section projects'>
            <h2>Stereogram</h2>
            <div className='project_description'>
        		  <p>Stereogram is a web app to allow friends to recommend music to each other and
              find out what their friends are listening to. This was built using the Django framework along with javascript, jquery and sass.</p>
              <p>Vist <a href= "http://www.stereogram.me">www.stereogram.me</a></p>
              <p><i className="fa fa-github"/> <a href= "https://github.com/safdarzeeshan/listeninto_app">https://github.com/safdarzeeshan/listeninto_app</a></p>
            </div>
        		<div className='project_image'>
              <a href= "https://github.com/safdarzeeshan/listeninto_app">
                <img src='css/media/stereogram.jpg'/>
              </a>
        		</div>
        	</div>
      </div>
    );
  }
});

module.exports = Projects;