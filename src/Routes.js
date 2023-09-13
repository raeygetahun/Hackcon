import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Auth } from "./pages/Authentication";

export const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/auth" component={Auth} />
			</Switch>
		</Router>
	);
};

export default Routes;
