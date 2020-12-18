import voicesRaw from 'data/voices.json';
import getTagsFromVoices from 'services/tags';
import {
  getOrderedVoices,
  getRandomVoice,
  getVoices,
} from 'services/voice-utils';
import * as actionTypes from '../actions/actionTypes';
import settingsReducer from './settings-reducer';

const initialState = {
  voices: voicesRaw,
  tags: getTagsFromVoices(voicesRaw),
  // filteredVoices: getOrderedVoices(voicesRaw, 'ASC'),
  filteredVoices: getVoices(voicesRaw, 'All', '', 'ASC'),
  selected: null,
  settings: {
    sort: 'ASC',
    filter: 'All',
    search: '',
    isShuffled: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER:
      return {
        ...state,
        filteredVoices: getVoices(
          [...state.voices],
          action.payload,
          state.settings.search,
          state.settings.sort
        ),
        settings: settingsReducer(state.settings, action),
      };
    case actionTypes.SORT:
      return {
        ...state,
        filteredVoices: getOrderedVoices(
          [...state.filteredVoices],
          action.payload
        ),
        settings: settingsReducer(state.settings, action),
      };
    case actionTypes.SEARCH:
      return {
        ...state,
        filteredVoices: getVoices(
          [...state.voices],
          state.settings.filter,
          action.payload,
          state.settings.sort
        ),
        settings: settingsReducer(state.settings, action),
      };
    case actionTypes.SHUFFLE:
      return {
        ...state,
        selected: getRandomVoice([...state.filteredVoices]),
        settings: settingsReducer(state.settings, action),
      };
    case actionTypes.SELECT:
      return {
        ...state,
        selected: action.payload,
        settings: settingsReducer(state.settings, action),
      };
    default:
      return state;
  }
};

export default reducer;
