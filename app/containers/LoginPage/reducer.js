/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  isAuthenticate: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case 'SUCCESS':
        return {
          ...state,
          isAuthenticate: true,
        };
      default:
        // console.log(state);
        return { ...state };
    }
  });

export default loginPageReducer;
