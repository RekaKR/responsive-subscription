import React from 'react';
import Subscription from '../Subscription/Subscription';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import SignUpForm from '../SignUpForm/SignUpForm';

/*
const form = document.querySelector('.containerForm');
const fullPage = document.querySelector('.fullPage');

function addClass() {
  //  form.classList.add('displBlock');
  fullPage.classList.add('displNone');
}

function removeClass() {
  //  form.classList.remove('displBlock');
  fullPage.classList.remove('displNone');
}
*/

function Page() {
  return (
    <>
      <div className="fullPage">
        <Subscription />

        <div className="container">
          <LeftSide />
          <RightSide />
        </div>
      </div>

      <SignUpForm />
    </>
  );
}

export default Page;