import {AUTHENTICATE, LOGOUT} from '../actions/authActions';
const inititalState = {
  token: null,
  userId: null
};

export default (state = inititalState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId
      };
    // case SIGNUP:
    //   return {
    //     token: action.token,
    //     userId: action.userId
    //   };
    case LOGOUT:
      return inititalState;
    default:
      return state;
  }
};
