/* eslint-disable import/prefer-default-export */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = (payload) => {
  return {
    type: INCREMENT,
    payload,
  };
};
