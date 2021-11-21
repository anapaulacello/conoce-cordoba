import React from 'react'
import { RegisterForm } from '../../components'
import "./Register.css"
const Register = () => {
    return (
        <div className="register-container">
        <h3 className="register-container_title">Register</h3>
            <RegisterForm/>
        </div>
    )
}

export default Register
