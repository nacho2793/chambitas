import React from 'react';
import './UsersList.scss';

const usersList = props => {
  return (
    <div className="users-list">
      {props.users.map((numero, index) => {
        return (
          <div className="user" key={index}>
            <div className="display">
              <p className="email">email</p>
              <p className="password">password</p>
            </div>
            <div className="action">
              <button>
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
