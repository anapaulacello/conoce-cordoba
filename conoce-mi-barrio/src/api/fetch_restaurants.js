import { GET_RESTAURANTS } from "./fetch_routes";


const getRestaurants = async () => { 

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
 
};

const token = localStorage.getItem("token")
const tokenParsed = token.replaceAll('"','')
console.log(tokenParsed)
console.log('Bearer'+ ' ' + tokenParsed)


headers.Authorization = `Bearer ${tokenParsed}`
  
  const restaurants = await fetch(GET_RESTAURANTS, {
    method: "GET",
    credentials: "include",
    headers: headers,
  });
  const resRestaurants = await restaurants.json();
  console.log(resRestaurants);
  return resRestaurants;
};

export default getRestaurants