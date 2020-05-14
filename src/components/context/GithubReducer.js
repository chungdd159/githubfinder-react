export default (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SEARCH_USER':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'CLEAR_USER':
      return {
        ...state,
        users: [],
      };
    case 'SHOW_ALERT':
      return {
        ...state,
        alert: action.payload,
      };
    case 'REMOVE_ALERT':
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
};
