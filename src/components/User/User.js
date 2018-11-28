import React, { Component } from 'react';
import UsersList from '../UsersList';
import './User.scss';

class User extends Component {
  state = {
    email: '@nextiva.com',
    password: '',
    users: [{email: 'nacho@nextiva.com', password:'1234'}],
  };

  changeHandler = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onCreateUser= event => {
    event.preventDefault();
    const { email, password, users } = this.state;
    const user = { email, password }; 
    users.push(user);
    this.setState({ users, email: '', password: '' });
  }
  
  onCancel = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  }

  deleteUserHandler = (index) => {
    let { users } = this.state;
    users.splice(index, 1);
    this.setState({ users });
  };

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
              <button
                className="success"
                onClick={this.onCreateUser}
                disabled={!email || !password}
              >
                Create
              </button>
              <button className="cancel" onClick={this.onCancel}>Cancel</button>
            </div>
          </form>
        </div>
        <div className="display">
          <UsersList
            users={this.state.users}
            deleteUserHandler={this.deleteUserHandler}
          />
        </div>
      </div>
    );
  }
}

export default User;