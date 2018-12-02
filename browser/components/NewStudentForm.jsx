import React from 'react';

class NewStudentForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  handleChange = (e) => {
    const target = e.target;
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addStudent(this.state);
    console.log(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='firstName'>
            First name:
            <input name='firstName' type='text' required={true} value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <label htmlFor='lastName'>
            Last name :
            <input name='lastName' type='text' required={true} value={this.state.lastName} onChange={this.handleChange} />
          </label>
          <label htmlFor='email'>
            Email:
            <input name='email' type='email' required={true} value={this.state.email} onChange={this.handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}


export default NewStudentForm;
