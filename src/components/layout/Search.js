import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';

class Search extends Component {
  state = {
    text: '',
    loading: false,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { text } = this.state;

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
      this.setState({ loading: true });
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      );
      dispatch({
        type: 'SEARCH_USER',
        payload: res.data.items,
      });

      this.setState({ text: '', loading: false });
    }
  };

  onClick = (dispatch, e) => {
    dispatch({
      type: 'CLEAR',
      payload: [],
    });
  };

  render() {
    const { loading } = this.state;
    if (loading) {
      return <Spinner />;
    }
    return (
      <Consumer>
        {(value) => {
          const { dispatch, users } = value;
          return (
            <div className="mb-5 mt-2">
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search User..."
                    name="text"
                    value={this.state.text}
                    onChange={this.onChange}
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
                  onClick={this.onClick.bind(this, dispatch)}
                >
                  Clear Out
                </button>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
