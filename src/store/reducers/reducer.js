import getTagsFromVoices from 'services/tags';
import getOrderedVoices from 'services/voice-utils';
import voicesRaw from 'voices.json';
import * as actionTypes from '../actions/actionTypes';
import settingsReducer from './settings-reducer';

const initialState = {
  voices: getOrderedVoices(voicesRaw, 'ASC'),
  tags: getTagsFromVoices(voicesRaw),
  settings: {
    sort: 'ASC',
    filter: 'All',
    search: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER:
      return {
        ...state,
        settings: settingsReducer(state.settings, action),
      };
    case actionTypes.SORT:
      return {
        ...state,
        voices: getOrderedVoices([...state.voices], action.payload),
        settings: settingsReducer(state.settings, action),
      };
    case actionTypes.SEARCH:
      return {
        ...state,
        settings: settingsReducer(state.settings, action),
      };
    default:
      return state;
  }
};

export default reducer;
