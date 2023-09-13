import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Welcome from "../components/Welcome/Welcome";
import AboutText from "../components/About/AboutText";
import HackconInNumbers from "../components/About/HackconInNumbers";
import WhyHackCon from "../components/About/WhyHackCon/WhyHackCon";
import WhattoExpect from "../components/About/WhattoExpect";
import WhocanParticpate from "../components/WhatAndWho/WhoCanParticipate";
import Schedule from "../components/Schedule/Schedule";
import Partners from "../components/Partners/Partners";
import Team from "../components/Team/Team";
import FAQ from "../components/FAQ/FAQ";
import Address from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export const Landing = () => {
	return (
		<div className="App">
			<Navbar />
			<Welcome />
			<AboutText />
			<HackconInNumbers />
			<WhyHackCon />
			<WhattoExpect />
			<WhocanParticpate />
			<Schedule />
			<Partners />
			<Team />
			<FAQ />
			<Address />
			<Footer />
		</div>
	);
};
