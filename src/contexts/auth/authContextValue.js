export const authContextValue = (dispatch) => ({
  signIn: async (data) => {
    dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
  },
  signOut: () => dispatch({type: 'SIGN_OUT'}),
  signUp: async (data) => {
    dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
  },
});
