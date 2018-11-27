import React, { Component } from 'react';
import './FormHandler.scss';

class FormHandler extends Component {
  state = {
    email: '',
    password: '',
  };

  changeHandler = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="create-users">
        <span>Class 01</span>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.changeHandler}
            />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.changeHandler}
          />
        </form>
      </div>
    );
  }
}

export default FormHandler;