import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Routes, Route, HashRouter } from "react-router-dom";
import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
import {
Services,
ServicesOne,
ServicesTwo,
ServicesThree,
} from "./pages/Services";
import { Events, EventsOne, EventsTwo } from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
class App extends Component {
render() {
return (
	<HashRouter>
	<div className="content">
	<Sidebar />
	<Routes>
		<Route exact path="/" element={<Home />} />
		<Route exact path="/about-us" element={<AboutUs />} />
		<Route exact path="/about-us/aim" element={<OurAim />} />
		<Route exact path="/about-us/vision" element={<OurVision />} />
		<Route exact path="/services" element={<Services />} />
		<Route exact path="/services/services1" element={<ServicesOne />} />
		<Route exact path="/services/services2" element={<ServicesTwo />} />
		<Route exact path="/services/services3" element={<ServicesThree />} />
		<Route exact path="/contact" element={<Contact />} />
		<Route exact path="/events" element={<Events />} />
		<Route exact path="/events/events1" element={<EventsOne />} />
		<Route exact path="/events/events2" element={<EventsTwo />} />
		<Route exact path="/support" element={<Support />} />
	</Routes>
	</div>
	</HashRouter>
);
}
}

export default App;
