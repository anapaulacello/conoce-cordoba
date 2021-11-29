import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import './Culture.css';
import { Spinner } from '../../components';
import { GET_CULTURE } from '../../api/fetch_routes';
import Slider from 'infinite-react-carousel';
import { Link } from 'react-router-dom';

const Culture = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios(GET_CULTURE).then(
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
                <h3 className="list-title">{item.name}</h3>
                <p className="list-text">{item.adress}</p>
                <p className="list-text">Horario:{item.hour}</p>
            </li>
            ))}
            </ul>
            <Link to="/multiform">
            <button className="multiform-button">¡PLANEA TU DÍA!</button>
            </Link>
            </>
        );
    }
};
export default Culture