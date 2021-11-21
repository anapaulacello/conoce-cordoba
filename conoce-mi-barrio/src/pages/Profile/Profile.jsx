import React, {useContext, useState,useEffect} from 'react'
import {UserContext} from '../../App'
import { deleteDayFromUser, getDayFromUser } from '../../api/fetch_day'

const Profile = () => {
  const [error, setError] = useState(null);
  const [itinerary,setItinerary]=useState([]);
  const [_id,setId]=useState()

  const {user}= useContext(UserContext)

  useEffect(async() => {
    try {
      const {data}=await getDayFromUser();
      setItinerary(data.days.itinerary)
    } catch (error) {
      setError(error);
    }

  }, []);

  const deleteDay=async(ev)=>{
      ev.preventDefault();
      setError("")
      
      try {
          await deleteDayFromUser(_id);
          setError("");
      } catch (error) {
      setError(error.message);
      }
  }

  const handleInput = (ev) => {
    const {value} = ev.target;  
    setId(value)          
    console.log(value)
}

    
    console.log(itinerary,"x")

    return (
        <div className="profile-container">
          {user ? <p>hola {user}</p> : null}
            <ul>
              <li>usuario: {user}</li>
              <li>email: {user.email}</li>
             
            </ul>
              <div class="accordion accordion-flush" id="accordionFlushExample">
            {itinerary.map((element)=>(
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                  data-bs-target={`#a${element._id}`} 
                  aria-expanded="false" aria-controls="flush-collapseOne" >
                  {element.date}
                  {/* <button onClick={deleteDay}>borrar</button> */}
                  </button>
                  
                </h2>
                 {element.actions.map((action)=>(
                  <div id={`a${element._id}`} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                  {action.name}
                  </div>
                </div>
                ))} 

              </div>
            ))}
          </div>  
        </div>
    )
}

export default Profile
