const BASE_URL=`https://backend-cordoba.vercel.app`

const GET_ACTION_BY_NAME=`${BASE_URL}/action/name/`

const GET_RESTAURANTS=`${BASE_URL}/action/name/restaurant`
const GET_DISCO=`${BASE_URL}/action/name/disco`
const GET_CULTURE=`${BASE_URL}/action/name/culture`

const REGISTER_USER = `${BASE_URL}/user/register`;
const LOGIN_USER = `${BASE_URL}/user/login`;
const LOGOUT_USER = `${BASE_URL}/user/logout`;

const CREATE_DAY=`${BASE_URL}/day/user/day/add`;
const GET_DAY_FROM_USER=`${BASE_URL}/day/user/day/get`
const DELETE_DAY_FROM_USER=`${BASE_URL}/day/user/day/delete`


export {
    BASE_URL,
    GET_ACTION_BY_NAME,
    
    GET_RESTAURANTS,
    GET_DISCO,
    GET_CULTURE,

    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER,

    CREATE_DAY,
    GET_DAY_FROM_USER,
    DELETE_DAY_FROM_USER
  };