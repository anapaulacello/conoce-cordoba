import React from 'react'
import {Link} from "react-router-dom"
const Navigation = () => {
    return (
        <>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/restaurants">
          <button>restaurants</button>
        </Link>
        <Link to="/cultures">
          <button>Culture</button>
        </Link>
        <Link to="/discos">
          <button>Disco</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        </>
    )
}

export default Navigation
