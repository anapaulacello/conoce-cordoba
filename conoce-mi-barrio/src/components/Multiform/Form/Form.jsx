import React from "react";
import { useState } from "react";
import { createDay } from "../../../api/fetch_day";
import DatePicker from "react-datepicker";
import './Form.css';
import AddCorrectlyAlert from "../../Alerts/AddCorrectlyAlert";

const INITIAL_STATE = { date: "", actions: [] };

const Form = ({ items, step }) => {
    const [state, setState] = useState(INITIAL_STATE);
    const [error, setError] = useState(null);
    const [startDate, setStartDate] = useState(new Date());

    const submitForm = async (ev) => {
        ev.preventDefault();
        setError("");
        console.log(JSON.stringify(state));
        /* localStorage.setItem(`FormData`, JSON.stringify(state)); */

        try {
            await createDay(state);
            setState(INITIAL_STATE);
            setError("");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleDateSelect = (value) => {
        const formstedDate=value.toLocaleDateString()
        setStartDate(value);
        setState({ ...state,date:formstedDate });
    };
    const handleInput = (ev) => {
        const { value } = ev.target;
        setState({ ...state, actions: [...state.actions, value] });
        console.log(state);
    };

    return (
        <>
            <h1 className="form-h1">PLANEA TU DÍA</h1>
            <p className="form-maintext">Primero, elige una fecha para tu visita:</p>
            <form className="form" onSubmit={submitForm}>   
            <div className="form_date-picker" >
            <DatePicker
                    className="date-picker"
                    minDate={new Date()}
                    selected={startDate}
                    onChange={handleDateSelect}
                    value={handleDateSelect}
            />
            </div>       
                <p className="form-maintext">¡Ahora puedes elegir los sitios que vas a visitar! Elige lo que prefieras hacer en tu día en Córdoba 💃</p>
                <label className="form-page">
                    {items[step].data.Action.map((item) => (
                        <div className="form-container" key={item._id}>
                            <img
                                className="form-image"
                                src={item.image}
                                alt={item.name}
                            ></img>
                            <h3 className="form-title">{item.name}</h3>
                            <p className="form-text">{item.adress}</p>
                            <p className="form-text">Horario:{item.hour}</p>
                            <input
                                className="form-check"
                                type="checkbox"
                                name={item.name}
                                value={item._id}
                                onChange={handleInput}
                            />
                        </div>
                    ))}
                    </label>
                    <button className="submit-button" type="submit">Guardar</button>           
                
            </form>
        </>
    );
};

export default Form;
