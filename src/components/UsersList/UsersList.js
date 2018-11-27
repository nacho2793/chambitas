import React from 'react';
import './UsersList.scss';

const usersList = props => {
  return (
    <div className="users-list">
      {/* Create a dynamic list that renders all the users passed */}
      <div className="user">
        <div className="display">
          <p className="email">email</p>
          <p className="password">password</p>
        </div>
        <div className="action">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default usersList;
