import React,{useState,useEffect}  from 'react'
import {findAction} from "../../api/fetch_action"
import "./FindAction.css"


const FindAction = () => {
    const [error, setError] = useState("");
    const [actionName, setActionName] = useState("");
    const [found, setFound]=useState([])
    const getData=async()=>{
        try {
            if(actionName!=""){
                console.log("actionname",actionName)
                const {data}=await findAction(actionName);
                if(data){
                    setFound(data.Action)
                    console.log("datos de data.Action",data.Action)
                }
            }else{
                console.log("action name vacio")
                setFound([])
            }
        } catch (error) {
            setError(error);
        }
    }
    useEffect(async () => {
        getData();
      }, [actionName]);
    
    const handleInput = (e) => {
        const {value } = e.target;
        setActionName(value)
        console.log("handle input",value)
    };
    console.log("datos de found",found)
    return (
        <div className="find-action-container">
            <div className="find-action_intput-button">
                <input
                className="form-control find-input" id="formGroupExampleInput"
                type="text"
                onChange={handleInput}
                placeholder="nombre de action"
                />
            </div>
            <ul className="List-container">
            {found!=[]?(
                <>
                {console.log(found)}
                {found.map((element)=>
                    <li className="list-card" key={element.name}>
                        <div className="found_card">
                            <h1>{element.name}</h1>
                            <img className="list-image" src={element.image} alt={element.name}/>
                            <p>{element.adress}</p>
                            <p>{element.hour}</p>
                            <p>{element.actionEnum}</p>
                        </div>
                    </li>
                )}
                </>
            ):null}  
            </ul>
        </div>
    )
}

export default FindAction
