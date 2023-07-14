import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN } from "../constants";
import { getRequestAuth } from "../../api/RequestHelpers";

export function saveToken(token) {
  return async function (dispatch) {
    console.log(token);
    await AsyncStorage.setItem('token', token);
    dispatch({
      type: TOKEN,
      payload: token,
    });
  };
}

export function deleteToken() {
  return async function (dispatch) {
    await AsyncStorage.removeItem('token');
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
      console.log(res);
      isValid = !!res.status
    })

    if (isValid) {
      await dispatch({
        type: TOKEN,
        payload: token,
      });
    } else {
      await dispatch({
        type: TOKEN,
        payload: null
      })
    }
    return isValid
  };
}
