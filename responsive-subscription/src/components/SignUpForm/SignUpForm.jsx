import React from 'react'

function SignUpForm() {
  return (
    <div className="containerForm">
      <h2>Sign Up</h2>
      <form action="printOut">
        <input type="text" name="name" id="nameForm" placeholder="Name" required />
        <input type="date" name="birth" id="birthForm" required />
        <input type="text" name="address" id="addressForm" placeholder="Address" required />
        <div>
          <p>Already a member?</p>
          <a>Log In</a>
        </div>
        <input id="submit" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SignUpForm
