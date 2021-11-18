
const Pofile = () => {
    const[user,setUser]=useState(null)
    const authenticated = user != null;
    console.log('estado del usuario',user)
    return (
        <div>
            <h1>{user}</h1>
        </div>
    )
}

export default Pofile
