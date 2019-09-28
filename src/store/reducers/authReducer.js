import {LOGIN, SIGNUP} from '../actions/authActions';
const inititalState = {
  token: null,
  useId: null
};

export default (state = inititalState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.token,
        userId: action.userId
      };
    case SIGNUP:
      return {
        token: action.token,
        userId: action.userId
      };
    default:
      return state;
  }
};