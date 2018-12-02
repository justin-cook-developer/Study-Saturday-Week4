const ADD_STUDENT =  'ADD_STUDENT';
export const addStudent = student => ({
  type: ADD_STUDENT,
  student
});

const SELECT_STUDENT = 'SELECT_STUDENT';
export const selectStudent = student => ({
  type: SELECT_STUDENT,
  student
});

const TOGGLE_FORM_DISPLAY = 'TOGGLE_FORM_DISPLAY';
export const toggleFormDisplay = () => ({
  type: TOGGLE_FORM_DISPLAY
});
