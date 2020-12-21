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
  filteredVoices: getVoices(voicesRaw, 'All', '', 'ASC'),
  tags: getTagsFromVoices(voicesRaw),
  favs: [],
  filteredFavs: [],
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
        filteredFavs: getVoices(
          [...state.favs],
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
        filteredFavs: getOrderedVoices([...state.filteredFavs], action.payload),
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
        filteredFavs: getVoices(
          [...state.favs],
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
    case actionTypes.SET_FAV:
      return {
        ...state,
        favs: [...state.favs].concat(action.payload),
        filteredFavs: [...state.filteredFavs].concat(action.payload),
      };
    case actionTypes.SET_UNFAV:
      return {
        ...state,
        favs: [...state.favs].filter((fav) => fav.id !== action.payload.id),
        filteredFavs: [...state.filteredFavs].filter(
          (fav) => fav.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default reducer;
