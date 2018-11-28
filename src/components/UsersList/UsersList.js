import React from 'react';
import './UsersList.scss';

const usersList = props => {
  return (
    <div className="users-list">
      {props.users.map((user, index) => {
        console.log(index);
        return (
          <div className="user" key={index}>
            <div className="display">
              <p className="email">{user.email}</p>
              <p className="password">{user.password}</p>
            </div>
            <div className="action">
              <button onClick={() => props.deleteUserHandler(index)}>
                Delete
              </button>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default usersList;
