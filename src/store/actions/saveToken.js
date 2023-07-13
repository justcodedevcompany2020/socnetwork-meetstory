import { TOKEN } from "../constants";

export function saveToken(token) {
  return {
    type: TOKEN,
    payload: token,
  };
}
