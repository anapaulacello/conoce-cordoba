import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios"
import {  Spinner } from '../../components';
import { GET_DISCO } from '../../api/fetch_routes';

 

 const Disco = () => {
     const [error,setError]=useState(null);
     const [isLoaded,setIsLoaded]=useState(false);
     const [items, setItems]=useState([]);

     useEffect (()=>{
         axios(GET_DISCO).then(
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
                <div key={item._id} id={`a${item._id}`} >
                        <img src={item.image} alt={item.name}/>
                    <h3>{item.name}</h3>
                    <p>{item.adress}</p>
                    <p>Horario:{item.hour}</p>
                </div>
                ))}
                </ul>
       </>
        );
     }

 };

 export default Disco
