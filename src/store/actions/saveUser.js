import { getRequestAuth, imgUrl } from "../../api/RequestHelpers";
import { USER } from "../constants";

export function saveUser(user) {
  console.log('saveUser');
  return {
    type: USER,
    payload: user,
  };
}


export function deleteUser() {
  console.log('deleteUser');
  return {
    type: USER,
    payload: null,
  };
}

export function getUserInfo(token) {
  return async function (dispatch) {
    await getRequestAuth('get_auth_user_info', token).then(async res => {
      console.log('getUserInfo', res.data.name, res.data.id)
      await dispatch(saveUser({...res.data, avatar: `${imgUrl}${res.data.avatar}`}))
    })
  }
}
