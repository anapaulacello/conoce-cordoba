import React from 'react'
import '../styles.css'
import Header from '../Header/Header';
 
 import { useState, useEffect } from 'react';
 import axios from "axios"
import Spinner from '../Spinner/Spinner';
import DayChooser from '../DayChooser/DayChooser';
import Button from '../Button/Button';
 import Checkbox from '../Checkbox/Checkbox';

 

 const Disco = () => {
     const BASEURL="https://backend-cordoba.vercel.app";
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
         return<Spinner></Spinner>
     }else{
         return(
             <>
             <Header></Header>
             <div>
                <ul>
            {items.map((item)=>(
              <li key={item._id}>
                  <img className="image" src={item.image} alt={item.name}></img>
                  <h3>{item.name}</h3>
                  <p>{item.adress}</p>
                  <p>Horario:{item.hour}</p>
                  <Checkbox></Checkbox>
              </li>  
            ))}
        </ul> 
             </div>
             <div>
                 <DayChooser>Listo!</DayChooser>
             </div>
            
        </>
         );
     }

 };

 export default Disco
