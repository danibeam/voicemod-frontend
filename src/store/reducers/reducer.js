import getTagsFromVoices from 'services/tags';
import { getOrderedVoices, getFilteredVoices } from 'services/voice-utils';
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
        voices:
          action.payload === 'All'
            ? getOrderedVoices(initialState.voices, state.settings.sort)
            : getFilteredVoices(
                getOrderedVoices(initialState.voices, state.settings.sort),
                action.payload
              ),
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
