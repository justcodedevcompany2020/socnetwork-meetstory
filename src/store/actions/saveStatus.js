import { STATUS } from "../constants";

export function saveStatus(status) {
  return {
    type: STATUS,
    payload: status,
  };
}
