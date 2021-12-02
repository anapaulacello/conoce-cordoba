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
            <ul className="found-list-container">
            {found!=[]?(
                <>
                {console.log(found)}
                {found.map((element)=>
                    <li className="found-list-card" key={element.name}>
                        <div className="found-card">
                            <img className="found-list-image" src={element.image} alt={element.name}/>
                            <h1 className="list-title">{element.name}</h1>
                            <p  className="list-text">{element.adress}</p>
                            <p  className="list-text">{element.hour}</p>
                            <p  className="list-text">{element.actionEnum}</p>
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
