import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios"
import { Spinner } from '../../components';
import { GET_DISCO } from '../../api/fetch_routes';
import './Disco.css'
import Slider from 'infinite-react-carousel';


const Disco = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios(GET_DISCO).then(
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
            {items.map((item)=>(
            <li className="list-card" key={item._id} id={`a${item._id}`} >
                <section className='slider'>
                    <Slider className='slider__content'>
                        <img className="list-image" src={item.image} alt={item.name} />
                        <iframe width="600" height="500" id="gmap_canvas" src={item.googleAdress} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </Slider>
                </section>
                <h3>{item.name}</h3>
                <p>{item.adress}</p>
                <p>Horario:{item.hour}</p>
            </li>
            ))}
            </ul>
            </>
        );
    }

};

export default Disco
