import React, { useState } from "react";
import "./Authentication.css";

export const Auth = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [pronouns, setPronouns] = useState("");
	const [studyingAtConstructor, setStudyingAtConstructor] = useState("");
	const [diplomaType, setDiplomaType] = useState("");
	const [graduationYear, setGraduationYear] = useState("");
	const [linkedIn, setLinkedIn] = useState("");
	const [cv, setCV] = useState(null);
	const [dietaryRestrictions, setDietaryRestrictions] = useState("");
	const [reasonToParticipate, setReasonToParticipate] = useState("");
	const [hasTeam, setHasTeam] = useState("");
	const [teamDetails, setTeamDetails] = useState("");
	const [suggestionsQuestions, setSuggestionsQuestions] = useState("");

	const handleFullNameChange = (event) => {
		setFullName(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePronounsChange = (event) => {
		setPronouns(event.target.value);
	};

	const handleStudyingAtConstructorChange = (event) => {
		setStudyingAtConstructor(event.target.value);
	};

	const handleDiplomaTypeChange = (event) => {
		setDiplomaType(event.target.value);
	};

	const handleGraduationYearChange = (event) => {
		setGraduationYear(event.target.value);
	};

	const handleLinkedInChange = (event) => {
		setLinkedIn(event.target.value);
	};

	const handleCVChange = (event) => {
		const file = event.target.files[0];
		setCV(file);
	};

	const handleDietaryRestrictionsChange = (event) => {
		setDietaryRestrictions(event.target.value);
	};

	const handleReasonToParticipateChange = (event) => {
		setReasonToParticipate(event.target.value);
	};

	const handleHasTeamChange = (event) => {
		setHasTeam(event.target.value);
	};

	const handleTeamDetailsChange = (event) => {
		setTeamDetails(event.target.value);
	};

	const handleSuggestionsQuestionsChange = (event) => {
		setSuggestionsQuestions(event.target.value);
	};

	const handleAuthSubmit = (event) => {
		event.preventDefault();

		// Handle submission logic here, including all form fields

		// Clear input fields after submission
		setFullName("");
		setEmail("");
		setPronouns("");
		setStudyingAtConstructor("");
		setDiplomaType("");
		setGraduationYear("");
		setLinkedIn("");
		setCV(null);
		setDietaryRestrictions("");
		setReasonToParticipate("");
		setHasTeam("");
		setTeamDetails("");
		setSuggestionsQuestions("");
	};

	return (
		<div className="auth-container">
			<div className="auth-card">
				<h1 className="registration-title">Participant Registration</h1>
				<form onSubmit={handleAuthSubmit} className="registration-form">
					{/* Full Name */}
					<div className="form-group">
						<label htmlFor="fullName">
							Full Name <span className="required">*</span>
						</label>
						<input
							type="text"
							id="fullName"
							value={fullName}
							onChange={handleFullNameChange}
							required
						/>
					</div>
					{/* Email */}
					<div className="form-group">
						<label htmlFor="email">
							Email <span className="required">*</span>
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={handleEmailChange}
							required
						/>
					</div>
					{/* Pronouns */}
					<div className="form-group">
						<label htmlFor="pronouns">Pronouns</label>
						<select
							id="pronouns"
							value={pronouns}
							onChange={handlePronounsChange}
						>
							<option value="hehim">He/Him</option>
							<option value="sheher">She/Her</option>
							<option value="prefertotsay">Prefer not to say</option>
						</select>
					</div>
					{/* Are you studying at Constructor University? */}
					<div className="form-group">
						<label>
							Are you studying at Constructor University?{" "}
							<span className="required">*</span>
						</label>
						<div>
							<label className="radio-label">
								<input
									type="radio"
									name="studyingAtConstructor"
									value="yes"
									checked={studyingAtConstructor === "yes"}
									onChange={handleStudyingAtConstructorChange}
									required
								/>{" "}
								Yes
							</label>
							<label className="radio-label">
								<input
									type="radio"
									name="studyingAtConstructor"
									value="no"
									checked={studyingAtConstructor === "no"}
									onChange={handleStudyingAtConstructorChange}
									required
								/>{" "}
								No
							</label>
						</div>
					</div>
					{/* Diploma Type */}
					<div className="form-group">
						<label htmlFor="diplomaType">Diploma Type</label>
						<select
							id="diplomaType"
							value={diplomaType}
							onChange={handleDiplomaTypeChange}
						>
							<option value="bachelors">Bachelor's</option>
							<option value="masters">Master's</option>
							<option value="phd">PhD</option>
						</select>
					</div>
					{/* Year of Graduation */}
					<div className="form-group">
						<label htmlFor="graduationYear">
							Year of Graduation <span className="required">*</span>
						</label>
						<select
							id="graduationYear"
							value={graduationYear}
							onChange={handleGraduationYearChange}
						>
							<option value="2024">2024</option>
							<option value="2025">2025</option>
							<option value="2026">2026</option>
							<option value="2027">2027</option>
							<option value="2028">2028</option>
						</select>
					</div>
					{/* LinkedIn */}
					<div className="form-group">
						<label htmlFor="linkedIn">LinkedIn</label>
						<input
							type="text"
							id="linkedIn"
							value={linkedIn}
							onChange={handleLinkedInChange}
						/>
					</div>
					{/* CV/Resume */}
					<div className="form-group">
						<label htmlFor="cv">
							CV/Resume <span className="required">*</span>
						</label>
						<input
							type="file"
							id="cv"
							accept=".pdf, .doc, .docx"
							onChange={handleCVChange}
							required
						/>
					</div>
					{/* Dietary Restrictions */}
					<div className="form-group">
						<label htmlFor="dietaryRestrictions">Dietary Restrictions</label>
						<input
							type="text"
							id="dietaryRestrictions"
							value={dietaryRestrictions}
							onChange={handleDietaryRestrictionsChange}
						/>
					</div>
					{/* Reason to Participate */}
					<div className="form-group">
						<label htmlFor="reasonToParticipate">
							Why do you want to participate in this year's hackathon?
						</label>
						<textarea
							id="reasonToParticipate"
							value={reasonToParticipate}
							onChange={handleReasonToParticipateChange}
						/>
					</div>
					{/* Do you already have a team? */}
					<div className="form-group">
						<label>
							Do you already have a team? <span className="required">*</span>
						</label>
						<div>
							<label>
								<input
									type="radio"
									name="hasTeam"
									value="yes"
									checked={hasTeam === "yes"}
									onChange={handleHasTeamChange}
									required
								/>{" "}
								Yes
							</label>
							<label>
								<input
									type="radio"
									name="hasTeam"
									value="no"
									checked={hasTeam === "no"}
									onChange={handleHasTeamChange}
									required
								/>{" "}
								No
							</label>
						</div>
					</div>
					{/* Team Details */}
					<div className="form-group">
						<label htmlFor="teamDetails">Team Details</label>
						<textarea
							id="teamDetails"
							value={teamDetails}
							onChange={handleTeamDetailsChange}
						/>
					</div>
					{/* Suggestions/Questions */}
					<div className="form-group">
						<label htmlFor="suggestionsQuestions">Suggestions/Questions</label>
						<textarea
							id="suggestionsQuestions"
							value={suggestionsQuestions}
							onChange={handleSuggestionsQuestionsChange}
						/>
					</div>
					{/* Register Button */}
					<button type="submit" className="registration-button">
						Register
					</button>
				</form>
			</div>
		</div>
	);
};
