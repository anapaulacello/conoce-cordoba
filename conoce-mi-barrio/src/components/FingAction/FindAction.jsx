import React,{useState,useEffect}  from 'react'
import {getActionByName} from "../../api/fetch_action"

const FindAction = () => {
    const [error, setError] = useState("");
    const [actionName, setActionName] = useState("");
    const [found, setFound]=useState({
        name:"",
        image:"",
        adress:"",
        hour:"",
        actionEnum:""
    })
    const getData=async()=>{
        try {
            const {data}=await getActionByName(actionName);
            setFound(data.Action[0])
            if(data){
                console.log("datos de found",data)
            }
        } catch (error) {
            setError(error);
        }
    }
    useEffect(async () => {
        getData();
      }, []);
    
    const handleInput = (e) => {
        const {value } = e.target;
        setActionName(value)
        console.log("handle input",value)
    };
    return (
        <div className="find-action-container">
            <div className="find-action_intput-button">
                <input
                className="form-control find-input" id="formGroupExampleInput"
                type="text"
                onChange={handleInput}
                placeholder="nombre de action"
                />
                <button className="btn btn-success "  
                onClick={getData}>buscar</button>
            </div>
{/*             {found?(
                <div className="found_card">
                    <h1>{found.name}</h1>
                    <img src={found.image} alt={found.name}/>
                    <p>{found.adress}</p>
                    <p>{found.hour}</p>
                    <p>{found.actionEnum}</p>
                </div>
            ):null} */}
        </div>
    )
}

export default FindAction
