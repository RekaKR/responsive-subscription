import React from 'react';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import SignUpForm from '../SignUpForm/SignUpForm';
import Subscription from '../Subscription/Subscription';

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
      {/*<SignUpForm />*/}
    </>
  );
}

export default Page;