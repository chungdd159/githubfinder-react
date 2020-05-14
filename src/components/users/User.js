import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
  const { avatar_url, login } = user
  return (
    <div className="col-lg-4">
      <div
        className="card text-center mb-4 py-4"
        style={{ alignItems: 'center' }}
      >
        <img
          src={avatar_url}
          alt=""
          className="img-circle "
          style={{ width: '60px', borderRadius: '50%' }}
        />
        <h3>{login}</h3>
        <div>
          <Link to={`/user/${login}`} className="btn btn-dark my-1">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
