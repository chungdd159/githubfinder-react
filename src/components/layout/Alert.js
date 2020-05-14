import React, { useContext } from 'react';
import GithubContext from '../context/GithubContext';

const Alert = () => {
  const { alert } = useContext(GithubContext);
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i> {alert.msg}
      </div>
    )
  );
};

export default Alert;
