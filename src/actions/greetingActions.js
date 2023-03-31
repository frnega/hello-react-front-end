/* eslint-disable import/prefer-default-export */
export const fetchGreeting = () => async (dispatch) => {
  try {
    const response = await fetch('messages/random_greeting');
    const data = await response.json();
    dispatch({ type: 'FETCH_GREETING_SUCCESS', payload: data.greeting });
  } catch (error) {
    dispatch({ type: 'FETCH_GREETING_FAILURE', error });
  }
};
