import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
  // Search-user
  const searchUser = async (text) => {
    if (text === '') {
      showAlert('Please Enter Something', 'danger');
    } else {
      setLoading();
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      );
      console.log(res.data);
      dispatch({
        type: 'SEARCH_USER',
        payload: res.data.items,
      });
    }
  };
  // clear user
  const clearUser = () => {
    dispatch({
      type: 'CLEAR_USER',
    });
  };
  // show alert
  const showAlert = (msg, type) => {
    dispatch({
      type: 'SHOW_ALERT',
      payload: { msg, type },
    });

    setTimeout(() => {
      dispatch({
        type: 'REMOVE_ALERT',
      });
    }, 2000);
  };

  const setLoading = () =>
    dispatch({
      type: 'SET_LOADING',
    });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        alert: state.alert,
        searchUser,
        clearUser,
        showAlert,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
