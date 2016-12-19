var React = require('react'),
    Home = require('./components/Home'),
    Resume = require('./components/Resume'),
    PhotoGallery = require('./components/PhotoGallery'),
    Projects = require('./components/Projects');


var Router = require('react-router');
var { Route, RouteHandler, Link, DefaultRoute } = Router;

var App = React.createClass({

  getInitialState: function() {
    return {
      entries: [],
      videoPlayed: false
      
    };
  },

  componentWillMount: function() {
    this.loadPhotoData().then(function(data) {
      this.setState({
        entries: data.feed.entry
      });
    }.bind(this));
  },

  componentDidMount: function(){

  },

  updateVideoState: function(videoPlayed) {
    console.log('setting video played: ', videoPlayed);
    this.setState({ videoPlayed: videoPlayed });
  },

  loadPhotoData: function() {
    return $.get('https://picasaweb.google.com/data/feed/api/user/safdarzeeshan/albumid/6139649719762631793?imgmax=1024&alt=json', { "_": $.now() });
  },
  
  render: function () {

    var props = {
      videoFinished: this.updateVideoState,
      state: this.state
    };

    return (
       <div className='main'>
          <div className ='header'>
            <nav>
              <li><Link className='button' to="/">Home</Link></li>
              <li><Link className='button' to="resume">Resume</Link></li>
              <li><Link className='button' to="design">Design</Link></li>
              <li><Link className='button' to="projects">Projects</Link></li>
            </nav>
          </div>
          <div className='content'>
          <RouteHandler {...props} />
          </div>
        </div> 
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App} >
    <Route name="resume" handler={Resume}/>
    <Route name="design" handler={PhotoGallery} />
    <Route name="projects" handler={Projects} />
    <DefaultRoute handler={Home} />
  </Route>
);

Router.run(routes, function (Handler,state) {
  React.render(<Handler/>, document.getElementById('app'));
});
