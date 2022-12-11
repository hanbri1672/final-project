import React, { Component } from "react";

class Services extends Component {
render() {
return (
	<div className="services">
	<h2>Choose a services option from the drop-down list in the menu</h2>
	</div>
);
}
};

class ServicesOne extends Component {
render() {
return (
	<div className="services">
	<h2>Christmas Shopping!</h2>
	<p>Please go to <a href="https://www.amazon.com/">amazon.com</a> to conduct some Christmas shopping!</p>
	</div>
);
}
};

class ServicesTwo extends Component {
render() {
return (
	<div className="services">
	<h2>Christmas Music!</h2>
	<p>Visit <a href="https://open.spotify.com/album/2ojsnLAKwDMT0k3sU0ur0x?si=0qOGANlqSjWNHgc9lUXnog">here</a> to listen to some Christmas hits!</p>
	</div>
);
}
};

class ServicesThree extends Component {
render() {
return (
	<div className="services">
	<h2>Christmas Videos!</h2>
	<p>Click <a href="https://www.youtube.com/watch?v=KUsfjs5UN5I&ab_channel=LullabyBaby">here</a> to watch a soothing Christmas video.</p>
	</div>
);
}
};

export { Services, ServicesOne, ServicesTwo, ServicesThree };