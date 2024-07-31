// src/reducers/exampleReducer.js
const initialState = {
    products: [],
    user: { role: 'user', name: '' },
  };
  
  const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return {
          ...state,
          products: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default exampleReducer;
  