import { USER } from "../constants";

export function saveUser(user) {
  console.log('aaa', user);
  return {
    type: USER,
    payload: user,
  };
}

