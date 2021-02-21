import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import SignUpForm from './SignUpForm';
import Subscription from './Subscription';

function Page() {
  return (
    <div className="fullPage">
      <Subscription />

      <div className="container">
        <LeftSide />
        <RightSide />
      </div>

      <SignUpForm />
    </div>
  );
}

export default Page;
