import React, { Component } from "react";

class AboutUs extends Component {
render() {
return (
	<div className="home">
	<h2>ABOUT ME</h2>
    <p>HI! My name is Hannah and I'm currently taking CIS453 and the CIS453L Lab.
        I am testing out these pages by putting different sentences in each section.
    </p>
	</div>
);
}
};

class OurAim extends Component {
render() {
return (
	<div className="home">
	<h2>My Aim</h2>
    <p>I aim to make this into a great final project.</p>
	</div>
);
}
};

class OurVision extends Component {
render() {
return (
	<div className="home">
	<h2>My Vision</h2>
    <p>I envision this project looking very similar to the mock-up I present in Unit 1.</p>
	</div>
);
}
};


export { AboutUs, OurAim, OurVision };