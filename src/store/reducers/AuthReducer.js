import { TOKEN, USER } from "../constants";

const initialState = {
  token: '',
  user: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default AuthReducer;
