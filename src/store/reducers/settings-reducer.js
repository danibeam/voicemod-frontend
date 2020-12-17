import * as actionTypes from '../actions/actionTypes';

const initialState = {
  sort: 'ASC',
  filter: 'All',
  search: null,
  isShuffled: false,
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
    case actionTypes.SHUFFLE:
      return {
        ...state,
        isShuffled: true,
      };
    case actionTypes.SELECT:
      return {
        ...state,
        isShuffled: false,
      };
    default:
      return state;
  }
};

export default settingsReducer;
