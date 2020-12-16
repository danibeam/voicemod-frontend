import getTagsFromVoices from 'services/tags';
import {
  getFilteredVoices,
  getFoundVoices,
  getOrderedVoices,
  getRandomVoice,
} from 'services/voice-utils';
import voicesRaw from 'voices.json';
import * as actionTypes from '../actions/actionTypes';
import settingsReducer from './settings-reducer';

const initialState = {
  voices: voicesRaw,
  tags: getTagsFromVoices(voicesRaw),
  filteredVoices: getOrderedVoices(voicesRaw, 'ASC'),
  selected: null,
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
        filteredVoices:
          action.payload === 'All'
            ? getOrderedVoices([...state.voices], state.settings.sort)
            : getFilteredVoices(
                [...state.voices],
                action.payload,
                state.settings.sort
              ),
        settings: settingsReducer(state.settings, action),
      };
    case actionTypes.SORT:
      return {
        ...state,
        filteredVoices: getOrderedVoices([...state.voices], action.payload),
        settings: settingsReducer(state.settings, action),
      };
    case actionTypes.SEARCH:
      return {
        ...state,
        filteredVoices: getFoundVoices([...state.voices], action.payload),
        settings: settingsReducer(state.settings, action),
      };
    case actionTypes.SHUFFLE:
      return {
        ...state,
        selected: getRandomVoice([...state.filteredVoices]),
      };
    case actionTypes.SELECT:
      return {
        ...state,
        selected: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
