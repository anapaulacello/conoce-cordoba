import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../App";
import { deleteDayFromUser, getDayFromUser } from "../../api/fetch_day";
import './Profile.css';
import Swal from 'sweetalert2/dist/sweetalert2.js';

const Profile = () => {
  const [error, setError] = useState(null);
  const [itinerary, setItinerary] = useState([]);

  const { user } = useContext(UserContext);

  const getData = async () => {
    try {
      const { data } = await getDayFromUser();
      setItinerary(data.days.itinerary);
      console.log(new Date(data))
      console.log(new Date(data).toLocaleDateString())
    } catch (error) {
      setError(error);
    }
  };
  useEffect(async () => {
    getData();
  }, []);

  const deleteDay = async (id) => {
    await deleteDayFromUser(id);
    getData();
  };
  return (
    <div className="profile-container">
      {user ? <h1 className="profile-title">¡HOLA, {user.toUpperCase()}!</h1> : null}
      <p className="profile-text">Aquí puedes ver el itinerario que has seleccionado:</p>
      {/*       <h3>usuario: {user}</h3>
      <h3>email: {user.email}</h3> */}
      <div className="accordion-accordion-flush" id="accordionPanelsStayOpenExample">
        {itinerary.map((element) => (
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#a${element._id}`}
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                {element.date}
              </button>
            </h2>
            {element.actions.map((action) => (
              <div
                id={`a${element._id}`}
                className="accordion-collapse-collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">{action.name}</div>
              </div>
            ))}
            <div className="trash-container">
              <a
                onClick={() => {
                  Swal.fire({
                    title: '¿Estás seguro?',
                    text: "¿Quieres borrar este día?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Borrar'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        '¡Borrado!',
                        'Se ha borrado el día',
                        'success',
                        deleteDay(element._id),
                      )
                    }
                  })
                  
                }}
              >
                <img className="papelera" src="https://img.icons8.com/bubbles/500/delete.png" alt="papelera" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
