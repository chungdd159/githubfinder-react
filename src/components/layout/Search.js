import React, { useState, useContext } from 'react';
import GithubContext from '../context/GithubContext';

const Search = () => {
  const [text, setText] = useState('');
  const { users, searchUser, clearUser } = useContext(GithubContext);

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    searchUser(text);
    setText('');
  };

  const onClick = () => clearUser();

  return (
    <div className='mb-5 mt-2'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Search User...'
            name='text'
            value={text}
            onChange={onChange}
          />
          <button
            className='btn btn-primary btn-lg btn-block mt-3'
            type='submit'
          >
            Get Users
          </button>
        </div>
      </form>
      {users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={onClick}>
          Clear Out
        </button>
      )}
    </div>
  );
};

export default Search;
