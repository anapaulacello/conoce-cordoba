import React, {useContext, useState} from 'react'
import {UserContext} from '../../App'

const Profile = () => {
    const {user}= useContext(UserContext)
    return (
        <div>
          {user ? <p>Hola, {user}</p> : null}
            
        </div>
    )
}

export default Profile
