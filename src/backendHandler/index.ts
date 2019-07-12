import { performFetchToBackend } from "../helpers/fetchHelper";

export async function authenticate (username: string, password: string) {
  try {
    return await performFetchToBackend("auth/login/", "post", new URLSearchParams([["username", username], ["password", password]]))
  } catch (err) {
    console.error(err);
  }
}

export async function logout () {
  try {
    return await performFetchToBackend("auth/logout", "get")
  } catch (err) {
    console.error(err);
  }
}