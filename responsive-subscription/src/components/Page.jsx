import React from 'react';
import Subscription from './Subscription';

function Page() {
  return (
    <div className="fullPage">
      <Subscription />

      <div className="container">
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

      <div className="containerForm">
        <h1>Sign Up</h1>
        <form action="printOut">
          <input type="text" name="name" id="nameForm" placeholder="Name" required />
          <input type="date" name="birth" id="birthForm" required />
          <input type="text" name="address" id="addressForm" placeholder="Address" required />
          <p>Already a member? <span>Log In</span></p>
          <input type="button" value="Submit" />
        </form>
      </div>

    </div>
  );
}

export default Page;
