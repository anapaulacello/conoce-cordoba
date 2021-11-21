import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "./fetch_routes";


let bearer = null;

bearer = `bearer ${JSON.parse(localStorage.getItem("token"))}`;

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: bearer,
};


export const loginUser = async (form) => {
  const loginFetch = await fetch(LOGIN_USER, {
    method: "POST",
    credentials: "include",
    headers: headers,
    body: JSON.stringify(form),
  });
  const res = await loginFetch.json();
  localStorage.setItem("user", JSON.stringify(res.data.user));
  localStorage.setItem("email",res.data.email);
  localStorage.setItem("token", JSON.stringify(res.data.token));
  if (!loginFetch.ok) {
    throw new Error("No se ha podido efectuar el login", res.message);
  }
  return res;
};

export const registerUser = async (form) => {
  const registerFetch = await fetch(REGISTER_USER, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(form),
  });
  const res = await registerFetch.json();
  if (!registerFetch) {
    throw new Error("No se ha podido registrar el usuario", res.message);
  }
  return res;
};

export const logout = async() => {
  const request = await fetch(LOGOUT_USER, {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": '*',
      },
      credentials: "include",
  });

  const response = await request.json();

  window.location.replace('/');
  return response;
};