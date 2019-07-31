export const addMessage = (val) => {
  return {
    type: 'ADD_MESSAGE',
    payload: val
  }
};

export const resetState = () => {
  return {
    type: 'RESET_STATE',
    payload: []
  }
};

export const changeTheme = (val) => {
  return {
    type: 'CHANGE_THEME',
    payload: val
  }
}
