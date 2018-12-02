import React, { Component } from 'react';
import axios from 'axios';

import StudentList from './StudentList.js';
import SingleStudent from './SingleStudent.js';
import NewStudentForm from './NewStudentForm.jsx';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {},
      displayForm: false
    };
    this.toggleFormDisplay = this.toggleFormDisplay.bind(this);
    this.selectStudent = this.selectStudent.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log('fetching');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  selectStudent(student) {
    return this.setState({
      selectedStudent: student,
    });
  }

  addStudent = async (formData) => {
    try {
      const {data: newStudent} = await axios.post('/student', formData);
      this.setState((state) => ({
        students: [...state.students, newStudent]
      }));
    } catch (error) {console.error(error)}
  }

  toggleFormDisplay(e) {
    e.preventDefault();
    this.setState((state) => ({
      displayForm: !state.displayForm
    }));
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <StudentList
            students={this.state.students}
            selectStudent={this.selectStudent}
          />
        </table>
        {this.state.selectedStudent.id ? (
          <SingleStudent student={this.state.selectedStudent} />
        ) : null}
        <button onClick={this.toggleFormDisplay}>Add New Student</button>
        {this.state.displayForm && <NewStudentForm addStudent={this.addStudent} />}
      </div>
    );
  }
}
