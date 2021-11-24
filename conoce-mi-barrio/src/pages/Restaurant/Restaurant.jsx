import React from 'react'
import "./Restaurant.css"
import { Spinner } from "../../components"
import { useState, useEffect } from 'react';
import axios from "axios"
import Slider from 'infinite-react-carousel';


const Restaurant = () => {
    const BASEURL = "https://backend-cordoba.vercel.app";
    const ITEMSURL = "/action/name/restaurant";
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios(BASEURL + ITEMSURL).then(
            (res) => {
                setItems(res.data.data.Action);
                console.log(items)
                setIsLoaded(true);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);
    if (error) {
        return <div>Error:{error.message}</div>
    } else if (!isLoaded) {
        return <Spinner></Spinner>
    } else {
        return (
            <>
                <ul className="List-container">
                    {items.map((item) => (
                        <div className="list-card" key={item._id} id={`a${item._id}`} >
                            <img className="list-image" src={item.image} alt={item.name} />
                            <h3 className="list-title">{item.name}</h3>
                            <p className="list-text">{item.adress}</p>
                            <p className="list-text">Horario:{item.hour}</p>
                        </div>
                    ))}
                </ul>
            </>
        );
    }

};

export default Restaurant