import React from 'react'
import "./Home.css"
import {motion} from "framer-motion"

const svgVariants = {
  hidden: { x: "-100vw" },
  show: {
    x: "10px",
    transition: {
      delay: 1,
      duration: 3,
      ease: "easeOut",
    },
  },
};

function Home() {
    return (
        <motion.div className="home-container">
            <motion.h1 className="home-container_title"
          variants={svgVariants}
          initial="hidden"
          animate="show"
            >Conoce Córdoba.</motion.h1>

        </motion.div>
    )
}

export default Home
