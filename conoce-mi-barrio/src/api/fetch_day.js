import {CREATE_DAY,GET_DAY_FROM_USER} from "./fetch_routes"

export const createDay =async (form)=>{
    const email=localStorage.getItem("email")
    const createDayFetch = await fetch(CREATE_DAY, {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "email":email
        },
        body: JSON.stringify(form),
      });
      const res = await createDayFetch.json();
      if (!createDayFetch) {
        throw new Error("No se ha podido registrar el dia", res.message);
      }
      return res;
}

/* export const setDay = (URL, body) => {
    // peticion de añadir día -> una vez tengas los datos posteados
    setDayToUser()
} */

export const getDayFromUser = async() => {
  const email=localStorage.getItem("email")
  const getDayFetch = await fetch(GET_DAY_FROM_USER, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "email":email
    }

  });
  console.log(email)
  const res = await getDayFetch.json();
  console.log(res.body)
  return res;
}
