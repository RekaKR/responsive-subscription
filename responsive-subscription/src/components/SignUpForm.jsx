import React from 'react'

function SignUpForm() {
  return (
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
  )
}

export default SignUpForm
