export const signUp = (userData) => {
  return {
    type: "SIGN_UP",
    payload: userData,
  };
};

export const signIn = (userData) => {
  return {
    type: "SIGN_IN",
    payload: userData,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
