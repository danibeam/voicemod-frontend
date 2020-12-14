import getTagsFromVoices from 'services/tags';
import getOrderedVoices from 'services/voice-utils';
import * as actionTypes from './actionTypes';

const voicesRaw = require('../voices.json');

const initialState = {
  voices: getOrderedVoices(voicesRaw, 'ASC'),
  tags: getTagsFromVoices(voicesRaw),
  settings: {
    sort: 'ASC',
    filter: null,
    search: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER:
      return {
        ...state,
        settings: {
          filter: action.payload,
        },
      };
    case actionTypes.SORT:
      return {
        ...state,
        voices: getOrderedVoices([...state.voices], action.payload),
        settings: {
          sort: action.payload,
        },
      };
    case actionTypes.SEARCH:
      return {
        ...state,
        settings: {
          search: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
