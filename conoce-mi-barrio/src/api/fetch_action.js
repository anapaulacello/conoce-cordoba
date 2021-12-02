import {FIND_ACTION} from "./fetch_routes"

export const findAction = async(name) => {
    const getActionFetch = await fetch(`${FIND_ACTION}${name}`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }
  
    });
    const res = await getActionFetch.json();
    return res;
  }