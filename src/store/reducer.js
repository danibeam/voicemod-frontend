import getTagsFromVoices from 'services/tags';
import * as actionTypes from './actions';

const voicesRaw = require('../voices.json');

const initialState = {
  count: 0,
  voices: voicesRaw,
  tags: getTagsFromVoices(voicesRaw),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state.count + 1;
    case actionTypes.DECREMENT:
      return state.count - 1;
    default:
      return state;
  }
};

export default reducer;
