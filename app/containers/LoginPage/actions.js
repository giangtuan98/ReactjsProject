/*
 *
 * LoginPage actions
 *
 */

import { DEFAULT_ACTION, AUTHENTICATION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function checkLoginAction(auth) {
  return {
    type: AUTHENTICATION,
    payload: auth,
  };
}
