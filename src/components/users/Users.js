import React, { useContext } from 'react';
import User from './User';
import GithubContext from '../context/GithubContext';

import Spinner from '../layout/Spinner';

const Users = () => {
  const { users, loading } = useContext(GithubContext);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="row">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
