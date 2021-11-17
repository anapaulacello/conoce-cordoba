import React,{useContext, useState} from 'react'
import {loginUser} from "../../api/fetch_user"
import { UserContext } from '../../App'



const LoginForm = () => {
    const{user,saveUser}=useContext(UserContext);
    const[error, setError]=useState('');
    const navigate=useNavigate();

    const submit= async ev=>{
        ev.preventDefault();
        try {
            const{email,password}=ev.target;
            const form={
                email:email.value,
                password:password.value
            }

            const userDB=await loginUser(form)
            saveUser(userDB.data.user)
            navigate("/")

        } catch (error) {
            
        }
    }

    return (
        <div>
            <form onSubmit={submiFrorm}>
                <input type="text" name="email" placeholder="e-mail"></input>
                <input type="text" name="password"></input>
                <button type="submit">login</button>
            </form>
            {/* <p>{(!user? 'no hay usuario')}</p> */}
        </div>
    )
}

export default LoginForm
