const initialState = {
  user: null,
  // other state properties
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    // other cases
    default:
      return state;
  }
};
