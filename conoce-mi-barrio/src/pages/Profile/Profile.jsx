import React, {useContext, useState} from 'react'
import {UserContext} from '../../App'

const Profile = () => {
    const {user}= useContext(UserContext)
    console.log(user)
    return (
        <div className="profile-container">
          {user ? <p>hola {user}</p> : null}
            <ul>
              <li>usuario: {user}</li>
              <li>email: {user.email}</li>

            </ul>
        </div>
    )
}

export default Profile
