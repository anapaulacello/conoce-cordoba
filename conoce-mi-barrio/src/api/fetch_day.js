import {CREATE_DAY} from "./fetch_routes"

export const createDay =async (form)=>{
    const createDayFetch = await fetch(CREATE_DAY, {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(form),
      });
      const res = await createDayFetch.json();
      if (!createDayFetch) {
        throw new Error("No se ha podido registrar el dia", res.message);
      }
      return res;
}

export const setDay = (URL, body) => {
    // peticion de añadir día -> una vez tengas los datos posteados
    setDayToUser()
}

export const setDayToUser = (URL, body) => {
    // peticion de añadir día
}
