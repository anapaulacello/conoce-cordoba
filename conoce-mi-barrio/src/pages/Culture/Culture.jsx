import React from 'react'
import "../styles.css"

import { useState, useEffect } from 'react';
import axios from "axios"
import { DayChooser, Spinner, Button, Checkbox } from '../../components'


const Culture = () => {
    const BASEURL = "https://backend-cordoba.vercel.app";
    const ITEMSURL = "/action/name/culture";
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
                <div className="header_container">
                    <img className="header_image" src="" alt="" />
                    <h1 className="header_title"></h1>
                </div>
                <ul>
                    {items.map((item) => (
                        <li key={item._id}>
                            <img className="image" src={item.image} alt={item.name}></img>
                            <h3>{item.name}</h3>
                            <p>{item.adress}</p>
                            <p>Horario:{item.hour}</p>
                            <Checkbox></Checkbox>
                        </li>

                    ))}
                </ul>
                <div>
                    <DayChooser>Listo!</DayChooser>
                    <Button></Button>
                </div>
            </>
        );
    }

};

export default Culture