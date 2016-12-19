var React = require('react');

var Resume = React.createClass({
  render: function () {

  	$('.button resume').addClass('on');

    return (
			<div>
			<section className = 'display_section resume'>
				<h2>Education</h2>

					<section className = 'education_section'>
						<section className = 'education_name'>
							<h4>University of Waterloo</h4>
							<p>Sep 2006 - Apr 2011</p>
						</section>
						<section className ='education_description'>
							<h4>Bachelors - Electrical Engineering Co-op</h4>
							<p>Course work included circuit analysis, wireless communcication, signal processing, algotihims
							and data structures. Due to the diversified nature of engineering it allowed me to understand multiple
							fields and solve problems from multiple perspectives.</p>

						</section>
					</section>

					<section className = 'education_section'>
						<section className = 'education_name'>
							<h4>Bitmaker Labs</h4>
							<p>Feb 2015 - May 2015</p>
						</section>
						<section className ='education_description'>
							<h4>User Experience Design</h4>
							<p>The course focused on the principles of User Exoperience and how to apply them.
							These included user reseach, wire framing, typography, use flows and microinteractions. Each principle was
							applied to a course long project which was presented at the end of the course.
							</p>
						</section>
					</section>

					<section className = 'education_section'>
						<section className = 'education_name'>
							<h4>Ontario College of Art & Design</h4>
							<p>May 2014 - July 2014</p>
						</section>
						<section className ='education_description'>
							<h4>Graphic Design Principles</h4>
							<p>This was a studio course that thouroughly examined design principles. Drawing, photography and typrograghy were
							a few of the topics that were taught. In class projects were completed with the Adobe suite.
							</p>
						</section>
					</section>
			</section>
			<section className = 'display_section resume'>
				<h2>Abilities</h2>
				<section className = 'abilities_section'>
					<h4>Back End</h4>
					<section className='ability'>
						<p>Python</p>
						<section className='stars'>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star-o"/>
						</section>
					</section>
					<section className='ability'>
						<p>Jython</p>
						<section className='stars'>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star-o"/>
						</section>
					</section>
					<section className='ability'>
						<p>Django</p>
						<section className='stars'>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star-o"/>
						</section>
					</section>
					<section className='ability'>
						<p>MySQL</p>
						<section className='stars'>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star-o"/>
						</section>
					</section>
				</section>
				<section className = 'abilities_section'>
				<h4>Front End</h4>
					<section className='ability'>
						<p>HTML5</p>
						<section className='stars'>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star-o"/>
						</section>
					</section>
					<section className='ability'>
						<p>Javascript</p>
						<section className='stars'>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star-o"/>
						</section>
					</section>
					<section className='ability'>
						<p>AngularJS</p>
						<section className='stars'>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star-o"/>
						</section>
					</section>
					<section className='ability'>
						<p>React JS</p>
						<section className='stars'>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star-o"/>
						</section>
					</section>
					<section className='ability'>
						<p>JQuery</p>
						<section className='stars'>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star-o"/>
						</section>
					</section>
					<section className='ability'>
						<p>CSS3</p>
						<section className='stars'>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star-o"/>
						</section>
					</section>
					<section className='ability'>
						<p>Sass</p>
						<section className='stars'>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star-o"/>
						</section>
					</section>
				</section>
				<section className = 'abilities_section'>
					<h4>Message Protocol</h4>
					<section className='ability'>
						<p>Json</p>
						<section className='stars'>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star-o"/>
						</section>
					</section>
					<section className='ability'>
						<p>SOAP/XML</p>
						<section className='stars'>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star-o"/>
						</section>
					</section>
					<section className='ability'>
						<p>XPath</p>
						<section className='stars'>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star-o"/>
						</section>
					</section>
				</section>
				<section className = 'abilities_section'>
					<h4>Graphic Design</h4>
					<section className='ability'>
						<p>Adobe Photoshop</p>
						<section className='stars'>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star-o"/>
						</section>
					</section>
					<section className='ability'>
						<p>Adobe Lightroom</p>
						<section className='stars'>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star-o"/>
						</section>
					</section>
					<section className='ability'>
						<p>Sketch</p>
						<section className='stars'>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star-o"/>
						</section>
					</section>
					<section className='ability'>
						<p>Invision</p>
						<section className='stars'>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star"/>
							<i className="fa fa-star-o"/>
						</section>
					</section>
				</section>
			</section>
			<section className = 'display_section resume'>
				<h2>Work Experience</h2>
				<section className = 'work_section'>
					<section className ='work_name'>
						<h4>Softworx Technology Group</h4>
						<p>Toronto, ON</p>
						<p>Sep 2014 - Current</p>
					</section>
					<section className='work_description'>
						<h4>Sales Engineer and Solution Architect</h4>
						<p>Softworx is a small company so I had multiple responsiblities. As a sales engineer I presented
						clients with technical demos catered to their requirements. I also participated in proof-of-concepts to implement
						our software in the client's environment. As a solution architect I would work with our clients by recommending and implementing
						automation solutions. Most of this work was done with Jython, SQL and XPath combined with Jenkins. I also conducted
						two day training classes to teach new customers how to use our software.</p>
					</section>
				</section>
				<section className= 'work_section'>
					<section className ='work_name'>
						<h4>CGI Group Inc</h4>
						<p>Toronto, ON</p>
						<p>Sep 2010 - Dec 2010</p>
					</section>
					<section className='work_description'>
						<h4>Project Delivery Officer</h4>
						<p>At CGI I had to ensure all tasks in our team were progressing  efficiently by communicating  with
						the development and testing teams. I was incharge of maintaining the project plan  and reports that outlined risks,
						issues, taks and status. I also helped create a process using HP-Quality Center to track, log and manage bugs.</p>
					</section>
				</section>
				<section className= 'work_section'>
					<section className ='work_name'>
						<h4>SAP BusinessObjects</h4>
						<p>Vancouver, BC</p>
						<p>Sep 2009 - Dec 2009</p>
					</section>
					<section className='work_description'>
						<h4>Software Developer</h4>
						<p>I was part of the team developing a visual dashboarding tool called Xcelsius. Using Java and C++ I created
						interactive visuals to display data. I also worked on a automated translational tool so users can use the tool
						in multiple languages.</p>
					</section>
				</section>
				<section className= 'work_section'>
					<section className ='work_name'>
						<h4>BlackBerry Ltd.</h4>
						<p>Waterloo, ON</p>
						<p>Sep 2010 - Dec 2010</p>
					</section>
					<section className='work_description'>
						<h4>Audio Engineering Associate</h4>
						<p>I created an application in Java and SQL that interacted with users by playing multiple
						audio signals and recording their responses. Using this application I conducted an audio quality experiment with 50
						participants. The results were then analyzed and published to the team for mobile device benchmarks.</p>
					</section>
				</section>
				<section className= 'work_section'>
					<section className ='work_name'>
						<h4>PlantCML</h4>
						<p>Gatineau, QC</p>
						<p>May 2008 - August 2008</p>
					</section>
					<section className='work_description'>
						<h4>Quality Assurance Specialist</h4>
						<p>I was part of the team that setup an automated harness for front-end testing. I created
						a library of C++ functions that interact with front end componnents. This library was used to
						create and run XML tests using TestComplete. </p>
					</section>
				</section>
				<section className= 'work_section'>
					<section className ='work_name'>
						<h4>Just-in-Time Resources</h4>
						<p>Calgary, AB</p>
						<p>Jan 2007 - Apr 2007</p>
					</section>
					<section className='work_description'>
						<h4>Software Developer</h4>
						<p>Just-in-Time provided their clients a customized web app to share videos. I
						developed a RSS feed componnent to upload new videos to portable devices. I also
						worked on a automated batch method to compress media via Sony Vegas. </p>
					</section>
				</section>
			</section>
		</div>

    );
  }
});

module.exports = Resume;