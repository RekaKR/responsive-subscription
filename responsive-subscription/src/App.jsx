//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="fullPage">
      <div className="subscription">
        <h1>Join our community</h1>
        <h2>30-day, hassle-free money back guarantee</h2>
        <p>Gain access to our full library of tutorials along with expert code reviews.</p>
        <p>Perfect for any developers who are serious about honing their skills.</p>
      </div>

      <div className="left">
        <h2>Monthly Subscription</h2>
        <div className="numbText">
          <p id="bigger">$29</p>
        </div>
        <p>Full access for less than $1 a day</p>
        <button>Sign Up</button>
      </div>

      <div className="right">
        <h2>Why Us</h2>
        <p>Tutorials by industry experts</p>
        <p>Peer & expert code review</p>
        <p>Coding exercises</p>
        <p>Access to our GitHub repos</p>
        <p>Community forum</p>
        <p>Flashcard decks</p>
        <p>New videos every week</p>
      </div>
    </div>
  );
}

export default App;
