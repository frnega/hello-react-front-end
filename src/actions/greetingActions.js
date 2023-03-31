/* eslint-disable import/prefer-default-export */
export const fetchGreeting = () => async (dispatch) => {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/messages/random_greeting');
    const data = await response.json();
    dispatch({ type: 'FETCH_GREETING_SUCCESS', payload: data.greeting });
  } catch (error) {
    dispatch({ type: 'FETCH_GREETING_FAILURE', error });
  }
};
