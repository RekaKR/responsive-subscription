import React from 'react'

function LeftSide(props) {
  return (
    <div className="left">
      <h3>Monthly Subscription</h3>
      <div className="numbText">
        <p id="bigger">$29</p>
      </div>
      <p id="per-day-line">Full access for less than $1 a day</p>
      <button onClick={props.click}>Sign Up</button>
    </div>
  )
}

export default LeftSide;
