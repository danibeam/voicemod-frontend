import * as actionTypes from './actionTypes';

export const sort = (payload) => {
  return {
    type: actionTypes.SORT,
    payload,
  };
};

export const filter = (payload) => {
  return {
    type: actionTypes.FILTER,
    payload,
  };
};

export const search = (payload) => {
  return {
    type: actionTypes.SEARCH,
    payload,
  };
};

export const shuffle = () => {
  return {
    type: actionTypes.SHUFFLE,
  };
};

export const select = (payload) => {
  return {
    type: actionTypes.SELECT,
    payload,
  };
};
