import React from 'react'
import { useState, useEffect } from 'react';
import Form from './Form/Form';
import Spinner from '../Spinner/Spinner';
import './Form/Form.css'

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
                <button className="form-step-next" onClick={changeStep}><img className="step-image" src="https://cdn-icons-png.flaticon.com/512/860/860828.png" alt="" /><p className="step-text">Siguiente</p></button>
                </>

            )

        } else if (step === 1) {
            return (
                <>
                    <Form items={items} step={step}></Form>
                    <button className="form-step-back" onClick={goBack}><img className="step-image" src="https://cdn-icons-png.flaticon.com/512/860/860790.png" alt="" /> <p className="step-text">Anterior</p></button>
                    <button className="form-step-next" onClick={changeStep}><img className="step-image" src="https://cdn-icons-png.flaticon.com/512/860/860828.png" alt="" /><p className="step-text">Siguiente</p></button>
                </>

            )
        } else {
            return (
                <>
                    <Form items={items} step={step}></Form>
                    <button className="form-step-back" onClick={goBack}><img className="step-image" src="https://cdn-icons-png.flaticon.com/512/860/860790.png" alt="" /> <p className="step-text">Anterior</p></button>
                </>
            )
        }

    } else {
        return (<Spinner></Spinner>)
    }

}

export default Multiform 