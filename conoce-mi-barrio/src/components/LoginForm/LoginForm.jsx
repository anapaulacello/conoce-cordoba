import React,{useContext, useState} from 'react'
import {loginUser} from "../../api/fetch_user"
import { UserContext } from '../../App'

const LoginForm = () => {
    const{user,saveUser}=useContext(UserContext);
    const[error, setError]=useState('');

    const submitForm= async ev=>{
        ev.preventDefault();
        setError("");
        try {
            const{email,password}=ev.target;
            const form={
                email:email.value,
                password:password.value
            }

            const userDB=await loginUser(form)
            console.log(userDB.data.user)
            saveUser(userDB.data.user)
        } catch (error) {
            console.log("Error -> Login", error);
            setError(error.message);
        }
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" name="email" placeholder="e-mail"></input>
                <input type="text" name="password"></input>
                <button type="submit">login</button>
            </form>
            <p>{!user?"No hay usuario logueado":user.name}</p>
        </div>
    )
}

export default LoginForm
