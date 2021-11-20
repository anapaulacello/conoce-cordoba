import React from 'react'
import "./Home.css"

const svgVariants = {
    hidden: { x: "-100px" },
    show: {
      x: "10px",
      transition: {
        delay: 1,
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-container_title">Conoce Córdoba.</h1>

        </div>
    )
}

export default Home
