import React from 'react'
 
 import { useState, useEffect } from 'react';
 import axios from "axios"

 

 const Restaurant = () => {
     const BASEURL="http://localhost:3000";
     const ITEMSURL="/action/name/disco";
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
         return<div>Loading...</div>
     }else{
         return(
            <ul>
            {items.map((item)=>(
              <li key={item._id}>
               <h3>{item.name}</h3>
                  <img src={item.image} alt={item.name}></img>
                  <p>{item.adress}</p>
                  <p>Horario:{item.hour}</p>
              </li>  
            ))}
        </ul>
         );
     }

 };

 export default Restaurant
