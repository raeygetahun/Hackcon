import React, { useState } from "react";
import "./Authentication.css";

export const Auth = () => {
	const [isLoginMode, setIsLoginMode] = useState(true);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleModeSwitch = () => {
		setIsLoginMode((prevMode) => !prevMode);
	};

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleAuthSubmit = (event) => {
		event.preventDefault();

		if (isLoginMode) {
			// Handle login logic here
			console.log(
				"Logging in with username:",
				username,
				"and password:",
				password
			);
		} else {
			// Handle registration logic here
			console.log(
				"Registering with username:",
				username,
				"and password:",
				password
			);
		}

		// Clear input fields after submission
		setUsername("");
		setPassword("");
	};

	return (
		<div className="auth-container">
			<div className="auth-card">
				<h1>{isLoginMode ? "Login" : "Register"}</h1>
				<form onSubmit={handleAuthSubmit}>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							value={username}
							onChange={handleUsernameChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={handlePasswordChange}
							required
						/>
					</div>
					<button type="submit">{isLoginMode ? "Login" : "Register"}</button>
				</form>
				<h5>
					{isLoginMode ? "Don't have an account?" : "Already have an account?"}
					<button type="button" onClick={handleModeSwitch}>
						{isLoginMode ? "Register here" : "Login here"}
					</button>
				</h5>
			</div>
		</div>
	);
};
