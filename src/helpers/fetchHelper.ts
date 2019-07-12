const BACKEND_URI = "http://localhost:3000/"

export async function performFetchToBackend(endpoint: string, method: "get" | "post", body?: URLSearchParams) {
  try {
    return await fetch(BACKEND_URI + endpoint, {
      method: method,
      credentials: "include",
      mode: "cors",
      body: body
    });
  } catch (err) {
    console.error(err);
  }
}