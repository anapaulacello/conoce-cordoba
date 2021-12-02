import {GET_ACTION_BY_NAME} from "./fetch_routes"

export const getActionByName = async(name) => {
    const getActionFetch = await fetch(`${GET_ACTION_BY_NAME}${name}`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }
  
    });
    const res = await getActionFetch.json();
    console.log(res.body)
    return res;
  }