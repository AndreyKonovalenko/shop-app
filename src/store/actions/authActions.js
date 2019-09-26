export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

export const signup = (email, password) => {
  return async dispatch => {
    console.log('signup start');
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnpNpevv4LjdQZc_X6x6RQf_hWc52JCO8',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'aplication/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    const resData = await response.json();
    console.log(resData);
    dispatch({type: SIGNUP});
  };
};

export const login = (email, password) => {
  return async dispatch => {
    console.log('login start');
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBnpNpevv4LjdQZc_X6x6RQf_hWc52JCO8',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'aplication/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    const resData = await response.json();
    console.log(resData);
    dispatch({type: LOGIN});
  };
};
