const initialState = {
    user: null,
      };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload,
        };
      case 'SAVE_USER_DETAILS':
        return {
          ...state,
          user: {
            ...state.user,
            ...action.payload,
          },
        };
     
      default:
        return state;
    }
  };
  
  export default userReducer;
  