import React from 'react'
import "../styles.css"
import {AuthRoute,LoginForm,RegisterForm,Checkbox, DayChooser, Spinner, Button} from "../../components"
 import { useState, useEffect } from 'react';
 import axios from "axios"

 

 const Restaurant = () => {
     const BASEURL="https://backend-cordoba.vercel.app";
     const ITEMSURL="/action/name/restaurant";
     const [error,setError]=useState(null);
     const [isLoaded,setIsLoaded]=useState(false);
     const [items, setItems]=useState([]);

     useEffect (()=>{
         axios(BASEURL+ITEMSURL).then(
            (res)=>{
                setItems(res.data.data.Action);
                console.log(items)
                setIsLoaded(true);
            } ,
            (error)=>{
                setIsLoaded(true);
                setError(error);
            }
         )
     },[]);
     if(error){
         return <div>Error:{error.message}</div>
     }else if(!isLoaded){
         return<Spinner></Spinner>
     }else{
         return(
            <>
            <ul>
            {items.map((item)=>(
              <li key={item._id}>     
                  <img className="image" src={item.image} alt={item.name}></img>
                  <h3>{item.name}</h3>
                  <p>{item.adress}</p>
                  <p>Horario:{item.hour}</p>
              </li>  
            ))}
        </ul>
        <DayChooser cl></DayChooser>
        <Button></Button>
        </>
         );
     }

 };

 export default Restaurant