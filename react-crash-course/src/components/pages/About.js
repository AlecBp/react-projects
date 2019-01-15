import React from "react";
import { Link } from 'react-router-dom';

function About() {
	return (
		<React.Fragment>
			<h1>About</h1>
			<p>This is the ToDo App developed using React by Alec.</p>
         <p>Source code is available at <Link target="_blank" id='github-link-repo' href="https://github.com/AlecBp/react-projects/tree/master/react-crash-course">GitHub</Link></p>
		</React.Fragment>
	);
}

export default About;
