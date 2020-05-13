import React from 'react';
import User from './User';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';

const Users = () => {
  return (
    <Consumer>
      {(value) => {
        const { users, loading } = value;
        if (loading) {
          return <Spinner />;
        } else {
          return (
            <div className="row">
              {users.map((user) => (
                <User key={user.id} user={user} />
              ))}
            </div>
          );
        }
      }}
    </Consumer>
  );
};

export default Users;
