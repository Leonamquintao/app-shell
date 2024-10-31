const initialState = {
  messages: [], 
  theme: 'theme-gray-blue-dark'
};

export const mainReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'RESET_STATE':
      return initialState;
    case 'ADD_MESSAGE':
      return {
        ...state, messages: [...state.messages, action.payload]
      };
    case 'CHANGE_THEME':
      return {
        ...state, theme: action.payload
      }

    default:
      return state;
  }

};
