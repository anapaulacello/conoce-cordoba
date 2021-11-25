import React from 'react'
import { useState, useEffect } from 'react';
import Form from './Form/Form';
import Spinner from '../Spinner/Spinner';
/* import DayChooser from '../DayChooser/DayChooser'; */

import "react-datepicker/dist/react-datepicker.css";
const Multiform = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [step, setStep] = useState(0);


    const fetcher = async (path) => {
        let response = await fetch('https://backend-cordoba.vercel.app' + path);
        return await response.json()
    }

    const getData = async () => {
        try {
            Promise.all([fetcher('/action/name/culture'),fetcher('/action/name/restaurant'),fetcher('/action/name/disco'),  ]).then((data) => { setItems(data)});
            setIsLoaded(true);
        } catch (error) {
            setError(error)
        }
    }

    const changeStep = () => {
        if (step === 0) {
            setStep(1);
        } else {
            setStep(2);
        }
    }

    const goBack = () => {
        if (step === 2) {
            setStep(1);
        } else {
            setStep(0);
        }
    }

    const saveDay = () => {
        let recoverData = localStorage.getItem('FormData');
        console.log(recoverData);
    }

    useEffect(() => {
        getData();
    }, []);


    if (isLoaded && error == null && items.length !== 0) {
        
        if (step === 0) {
            return (
                <>
                    <Form items={items} step={step}></Form>
                    <button onClick={changeStep}>Next Step</button>
                </>

            )

        } else if (step === 1) {
            return (
                <>
                    <Form items={items} step={step}></Form>
                    <button onClick={goBack}>go back</button>
                    <button onClick={changeStep}>Next Step</button>
                </>

            )
        } else {
            return (
                <>
                    <Form items={items} step={step}></Form>
                    <button onClick={goBack}>go back</button>
                    <button onClick={saveDay}>Send</button>
                </>
            )
        }

    } else {
        return (<Spinner></Spinner>)
    }

}

export default Multiform 