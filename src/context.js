import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_USER':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'CLEAR':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'ALERT':
      return {
        ...state,
        mes: 'Please Enter Something',
        clname: 'danger',
      };
    case 'CLEAR_ALERT':
      return {
        ...state,
        mes: '',
        clname: '',
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    users: [],
    loading: false,
    mes: '',
    clname: '',
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
