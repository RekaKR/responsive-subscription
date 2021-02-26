import React, { useState } from 'react';
import Subscription from '../Subscription/Subscription';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import SignUpForm from '../SignUpForm/SignUpForm';

function Page() {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <div className={`fullPage ${display ? "displNone" : ""}`}>
        <Subscription />

        <div className="container">
          <LeftSide click={() => setDisplay((state) => !state)} />
          <RightSide />
        </div>
      </div>

      <SignUpForm />
    </>
  );
}

export default Page;