import React, { Component } from "react";

class Events extends Component {
render() {
return (
	<div className="events">
	<h2>Choose an events option from the drop-down list in the menu</h2>
	</div>
);
}
};

class EventsOne extends Component {
render() {
return (
	<div className="events">
	<h2>12/24/2022</h2>
	<p>Christmas Eve!</p>
	</div>
);
}
};

class EventsTwo extends Component {
render() {
return (
	<div className="events">
	<h2>12/25/2022</h2>
	<p>Christmas Day!</p>
	</div>
);
}
};

export { Events, EventsOne, EventsTwo };