const students = (state = [], action) => {
  switch(action.type) {
    case 'ADD_STUDENT': {
      return [...state, action.student];
    }
    default:
      return state;
  }
}

export default students;
