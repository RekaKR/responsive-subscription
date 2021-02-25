import React, { useState } from 'react'

function SignUpForm() {
  const [nameValue, setNameValue] = useState();
  const [birthValue, setBirthValue] = useState();
  const [addressValue, setAddressValue] = useState();

  function printOut(e) {
    e.preventDefault();
    nameValue ? console.log(`Name: ${nameValue}`) : console.log("Name: need data")
    birthValue ? console.log(`Birth date: ${birthValue}`) : console.log("Birth date: need data")
    addressValue ? console.log(`Address: ${addressValue}`) : console.log("Address: need data")
  }

  return (
    <div className="containerForm">
      <h2>Sign Up</h2>
      <form id="uploadForm">
        <input type="text" name="name" id="nameForm" placeholder="Name" required onChange={(e) => setNameValue(e.target.value)} />
        <input type="date" name="birth" id="birthForm" required onChange={(e) => setBirthValue(e.target.value)} />
        <input type="text" name="address" id="addressForm" placeholder="Address" required onChange={(e) => setAddressValue(e.target.value)} />
        <div>
          <p>Already a member?</p>
          <a href="#">Log In</a>
        </div>
        <input id="submit" type="submit" value="Submit" onClick={(e) => printOut(e)} />
      </form>
    </div>
  )
}

export default SignUpForm;
