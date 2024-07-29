// loginReducer.js
const initialState = {
    isLoggedIn: false,
    username: '',
    password: ''
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {...state, isLoggedIn: true, username: action.username, password: action.password };
      case 'LOGOUT':
        return {...state, isLoggedIn: false, username: '', password: '' };
      default:
        return state;
    }
  };
  
  export default loginReducer;