const dipslayForm = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_FORM_DISPLAY': {
      return !state;
    }
    default:
      return state;
  }
}

export default dipslayForm;
