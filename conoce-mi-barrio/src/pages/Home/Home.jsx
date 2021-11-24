import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"
import {motion} from 'framer-motion';
import { UserContext } from '../../App';

const svgVariants = {
  hidden: { x: "-100vw" },
  show: {
    x: "10px",
    transition: {
      delay: 0.5,
      duration: 1,
      ease: "easeOut",
    },
  },
};

function Home() {
const {user}=useContext(UserContext);
    return (
        <motion.div className="home-container">
            <motion.h1 className="home-container_title"
          variants={svgVariants}
          initial="hidden"
          animate="show"
            >Conoce Córdoba.</motion.h1>
          {user==null?(        
            <Link to="login" style={{"text-decoration":"none"}}>
              <a className="login">Login</a>
            </Link>
          ):null}
          {user==null?( 
            <Link to="register" style={{"text-decoration":"none"}}>
              <a className="register" >Register</a>
            </Link>
          ):null}
        </motion.div>
    )
}

export default Home
