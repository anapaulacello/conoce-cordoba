import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../App'
import { deleteDayFromUser, getDayFromUser } from '../../api/fetch_day'

const Profile = () => {
  const [error, setError] = useState(null);
  const [itinerary, setItinerary] = useState([]);


  const { user } = useContext(UserContext)

  const getData = async () => {
    try {
      const { data } = await getDayFromUser();
      setItinerary(data.days.itinerary)
    } catch (error) {
      setError(error);
    }
  }
  useEffect(async () => {
    getData()
  }, []);

  const deleteDay = async (id) => {
    await deleteDayFromUser(id)
    getData()
  }
  return (
    <div className="profile-container">
      {user ? <p>hola {user}</p> : null}
      <h3>usuario: {user}</h3>
      <h3>email: {user.email}</h3>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        {itinerary.map((element) => (
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target={`#a${element._id}`}
                aria-expanded="false" aria-controls="flush-collapseOne" >
                {element.date}
                <a onClick={() => { deleteDay(element._id) }}>🗑️</a>
              </button>

            </h2>
            {element.actions.map((action) => (
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