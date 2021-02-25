import React from 'react';
import Subscription from '../Subscription/Subscription';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import SignUpForm from '../SignUpForm/SignUpForm';

function Page() {
  return (
    <>
      {/* <div className="fullPage">
        <Subscription />

        <div className="container">
          <LeftSide />
          <RightSide />
        </div>
      </div>*/}
      <SignUpForm />
    </>
  );
}

export default Page;