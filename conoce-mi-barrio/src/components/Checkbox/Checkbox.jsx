import React, { useState } from 'react'
import "./checkbox.css"

const CheckBox = () => {
    const [checked, setChecked]=useState(false);
    return (
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label 
        class="form-check-label" for="flexCheckDefault"
        >
        </label>
        </div>
    )
}

export default CheckBox
