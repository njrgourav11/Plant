const initialState = [
    {
      id: 1,
      name: 'Tree 1',
      description: 'A caudiciform plant with reddish and green leaves.',
      light: 'Bright indirect light environments.',
      water: 'Allow the soil to dry out completely before watering.',
      image: 'tree1.jpg'
    },
    // Add more products here...
  ];
  
  export default (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };