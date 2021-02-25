import React from 'react';
import Subscription from '../Subscription/Subscription';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import SignUpForm from '../SignUpForm/SignUpForm';

function addClass() {
  const fullPage = document.querySelector('.fullPage');
  fullPage.classList.add('displNone');
}

function Page() {
  return (
    <>
      <div className="fullPage">
        <Subscription />

        <div className="container">
          <LeftSide click={() => addClass()} />
          <RightSide />
        </div>
      </div>

      <SignUpForm />
    </>
  );
}

export default Page;