import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from './greetingSlice';

const Greeting = () => {
//  Get greetings from Redux store:
  const greeting = useSelector((state) => state.greetingReducer);
  const greetingsStatus = useSelector((state) => state.greetingReducer.status);
  const error = useSelector((state) => state.greetingReducer.error);

  // Prepare Redux dispatch method:
  const dispatch = useDispatch();

  useEffect(() => {
    if (greetingsStatus === 'idle') {
      dispatch(fetchGreetings());
    }
  }, [greetingsStatus, dispatch]);

  let content;

  if (greetingsStatus === 'succeeded') {
    content = (
      <p>
        <h1>Randome message generated on the console</h1>
        { greeting.greetings.content }
      </p>
    );
  } else if (greetingsStatus === 'failed') {
    content = (
      <>
        <h1>message not found</h1>
        <p>{error}</p>
      </>
    );
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default Greeting;
