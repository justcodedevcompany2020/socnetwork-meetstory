import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN } from "../constants";
import { getRequestAuth } from "../../api/RequestHelpers";
import { deleteUser, getUserInfo } from "./saveUser";

export function saveToken(token) {
  return async function (dispatch) {
    console.log(token);
    await AsyncStorage.setItem('token', token);
    dispatch(getUserInfo(token))
    dispatch({
      type: TOKEN,
      payload: token,
    });
  };
}

export function deleteToken() {
  return async function (dispatch) {
    await AsyncStorage.removeItem('token');
    dispatch(deleteUser())
    dispatch({
      type: TOKEN,
      payload: null,
    });
  };
}

export function checkToken() {
  return async function (dispatch) {
    const token = await AsyncStorage.getItem('token');
    let isValid = false;
    token && await getRequestAuth('validation_token', token).then(res => {
      isValid = !!res.status
    })

    if (isValid) {
      console.log(token);
      await dispatch({
        type: TOKEN,
        payload: token,
      });
      dispatch(getUserInfo(token))
    } else {
      await dispatch({
        type: TOKEN,
        payload: null
      })
      dispatch(deleteUser())
    }
    return isValid
  };
}

