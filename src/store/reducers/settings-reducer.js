import * as actionTypes from '../actions/actionTypes';

const initialState = {
  sort: 'ASC',
  filter: 'All',
  search: null,
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case actionTypes.SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case actionTypes.SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default settingsReducer;
