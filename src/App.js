import "./App.css";
import WhyHackCon from "./components/About/WhyHackCon/WhyHackCon";
import Address from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to My Hackathon Landing Page</h1>
      </header>
      <main>
        <WhyHackCon />
        <Address />
      </main>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} My Hackathon. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
export default App;
