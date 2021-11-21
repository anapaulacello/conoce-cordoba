import React from 'react'
import { useState } from 'react';
import { createDay } from '../../../api/fetch_day';
import DatePicker from "react-datepicker";
import AddCorrectlyAlert from '../../Alerts/AddCorrectlyAlert';

const INITIAL_STATE = {date:"",actions:[]}

const Form = ({ items, step }) => {
    const [state, setState] = useState(INITIAL_STATE);
    const [actions, setActions]=useState([]);
    const [error, setError] = useState(null);
    const [startDate, setStartDate] = useState(new Date());

    const submitForm =async (ev) => {
        ev.preventDefault();
        setError("")
        console.log(JSON.stringify(state))
        /* localStorage.setItem(`FormData`, JSON.stringify(state)); */
        
        try {
            await createDay(state);
            setState(INITIAL_STATE);
            setError("");
        } catch (error) {
        setError(error.message);
        }
    };


    const handleDateSelect=(date) =>{
        setStartDate(date) 
        setState({ ...state, date });
        console.log(date)
    } 
     const handleInput = (ev) => {
        const {value} = ev.target;        
        setState({...state,actions:[...state.actions,value]});         
        console.log(state)
    }; 


    return (
        <>
            <h1>PASO: {step}</h1>
            <form onSubmit={submitForm}>
             <DatePicker minDate={new Date()} selected={startDate} onChange={handleDateSelect} value={handleDateSelect}/> 
                <label>
                    {items[step].data.Action.map((item) => (
                        <div key={item._id}>
                            <img className="image" src={item.image} alt={item.name}></img>
                            <h3>{item.name}</h3>
                            <p>{item.adress}</p>
                            <p>Horario:{item.hour}</p>
                            <input type="checkbox" name={item.name} value={item._id} onChange={handleInput} />
                        </div>
                    ))
                    }
                </label>
                <button type="submit" >Guardar Actions</button>
            </form>
        </>
    )
}

export default Form