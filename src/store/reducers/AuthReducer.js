import { TOKEN } from "../constants";

const initialState = {
  token: '',
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
export default AuthReducer;
