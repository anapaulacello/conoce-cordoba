import React from "react";
import "./Restaurant.css";
import { Spinner } from "../../components";
import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "infinite-react-carousel";

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
                console.log(items);
                setIsLoaded(true);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }, []);
    if (error) {
        return <div>Error:{error.message}</div>;
    } else if (!isLoaded) {
        return <Spinner></Spinner>;
    } else {
        return (
            <>
                {items.map((item) => (
                    <div key={item._id} id={`a${item._id}`}>
                        <div className="container">
                            <section className="slider">
                                <Slider className="slider__content">
                                    <img src={item.image} alt={item.name} />
                                    <iframe
                                        width="600"
                                        height="500"
                                        id="gmap_canvas"
                                        src={item.googleAdress}
                                        frameborder="0"
                                        scrolling="no"
                                        marginheight="0"
                                        marginwidth="0"
                                    ></iframe>
                                </Slider>
                            </section>
                        </div>
                        <h3>{item.name}</h3>
                        <p>{item.adress}</p>
                        <p>Horario:{item.hour}</p>
                    </div>
                ))}
            </>
        );
    }
};

export default Restaurant;
