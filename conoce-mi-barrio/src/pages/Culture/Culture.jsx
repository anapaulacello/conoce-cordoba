import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios"
import {Spinner } from '../../components';
import { GET_CULTURE } from '../../api/fetch_routes';

const Culture = () => {
     const [error,setError]=useState(null);
     const [isLoaded,setIsLoaded]=useState(false);
     const [items, setItems]=useState([]);

     useEffect (()=>{
         axios(GET_CULTURE).then(
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
           <div key={item._id} id={`a${item._id}`} class="carousel slide carousel-fade" data-bs-ride="carousel">
               <div class="carousel-inner">
                   <div class="carousel-item active">
                   <img max-width="668" max-height="445" src={item.image} class="d-block w-100" alt={item.name} className="image"/>
                   </div>
                   <div class="carousel-item">
                   <iframe className="image" id="gmap_canvas" src={item.googleAdress} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                   </div>
               </div>
               <button class="carousel-control-prev" type="button" data-bs-target={`#a${item._id}`} data-bs-slide="prev">
                   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                   <span class="visually-hidden">Previous</span>
               </button>
               <button class="carousel-control-next" type="button" data-bs-target={`#a${item._id}`} data-bs-slide="next">
                   <span class="carousel-control-next-icon" aria-hidden="true"></span>
                   <span class="visually-hidden">Next</span>
               </button>
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

 export default Culture