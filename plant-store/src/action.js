import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

export const loginUser = (credentials) => {
  return async dispatch => {
    try {
      // Fetch user data from local JSON file
      const response = await fetch('/data/user.json');
      const users = await response.json();

      // Find the user with matching credentials
      const user = users.find(user => 
        user.username === credentials.username && 
        user.password === credentials.password
      );

      if (user) {
        // Dispatch login success action
        dispatch({ type: LOGIN_SUCCESS, payload: user });
      } else {
        // Dispatch login failure action
        dispatch({ type: LOGIN_FAILURE, payload: 'Invalid username or password' });
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: 'Error fetching user data' });
    }
  };
};
