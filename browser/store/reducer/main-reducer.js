import { combineReducers } from "redux";

import dipslayForm from './displayReducer'
import selectedStudent from './selectedStudentReducer'
import students from './addStudentReducer'

const reducer = combineReducers({
  students,
  selectedStudent,
  dipslayForm
});

export default reducer;
