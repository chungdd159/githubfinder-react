import React, { useState } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';

const Search = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false)

  const onChange = (e) => setText(e.target.value);

  const onSubmit = async (dispatch, e) => {
    e.preventDefault();
    if (text === '') {
      dispatch({
        type: 'ALERT',
      });
      setTimeout(() => {
        dispatch({
          type: 'CLEAR_ALERT',
        });
      }, 2000);
    } else {
      setLoading(true)
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      );
      dispatch({
        type: 'SEARCH_USER',
        payload: res.data.items,
      });

      setText('');
      setLoading(false)
    }
  };

  const onClick = (dispatch, e) => {
    dispatch({
      type: 'CLEAR',
      payload: [],
    });
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <Consumer>
      {(value) => {
        const { dispatch, users } = value;
        return (
          <div className="mb-5 mt-2">
            <form onSubmit={onSubmit.bind(this, dispatch)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Search User..."
                  name="text"
                  value={text}
                  onChange={onChange}
                />
                <button
                  className="btn btn-primary btn-lg btn-block mt-3"
                  type="submit"
                >
                  Get Users
                </button>
              </div>
            </form>
            {users.length > 0 && (
              <button
                className="btn btn-light btn-block"
                onClick={onClick.bind(this, dispatch)}
              >
                Clear Out
              </button>
            )}
          </div>
        );
      }}
    </Consumer>
  );
};

export default Search;
