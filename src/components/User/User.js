import React, { Component } from 'react';
import UsersList from '../UsersList';
import './User.scss';

class User extends Component {
  state = {
    email: '',
    password: '',
    users: [],
  };

  changeHandler = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onCreateUser= event => {
    event.preventDefault();
    // Add a user object to the users array in the state
    console.log('Implement the onCreateUser logic');
  }
  
  onCancel = event => {
    event.preventDefault();
    // Set the state of the component to the default
    console.log('Implement the onCancel user logic');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="users">
        <div className="create">
          <span>Class 02</span>
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
            <div className="actions">
              <button className="success" onClick={this.onCreateUser}>Create</button>
              <button className="cancel" onClick={this.onCancel}>Cancel</button>
            </div>
          </form>
        </div>
        <div className="display">
          <UsersList users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default User;