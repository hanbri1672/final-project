import React from "react";
//import "./pages.css";

export const AboutUs = () => {
return (
	<div className="home">
	<h1
    style={{
        textAlign: "center",
        marginLeft: "200px",
        color: "#000",
        fontFamily: "Georgia"
    }}
    >ABOUT ME</h1>
    <p>HI! My name is Hannah and I'm currently taking CIS453 and the CIS453L Lab.
        I am testing out these pages by putting different sentences in each section.
    </p>
	</div>
);
};

export const OurAim = () => {
return (
	<div className="home">
	<h1>My Aim</h1>
    <p>I aim to make this into a great final project.</p>
	</div>
);
};

export const OurVision = () => {
return (
	<div className="home">
	<h1>My Vision</h1>
    <p>I envision this project looking very similar to the mock-up I present in Unit 1.</p>
	</div>
);
};
