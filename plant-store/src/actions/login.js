export const login = (email, password) => {
    return dispatch => {
      const users = require('../data/users.json');
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        dispatch({ type: 'LOGIN_SUCCESS', user });
      } else {
        dispatch({ type: 'LOGIN_ERROR' });
      }
    };
  };