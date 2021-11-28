import React from "react";
import './About.css'
function About() {
    return (
        <div className="about-container">
            <div className="text-content">
            <h1 className="about-maintitle">¡Bienvenidx a *nombre de la app*!</h1>
            <p className="about-text">
                Este proyecto está desarrollado por un grupo de alumnos de bootcamp Full
                Stack en Upgrade Hub. Nuestra propuesta es una página que permita a
                cualquier usuario elegir cómo quiere pasar su día en la ciudad que
                quiere visitar. En este caso, la ciudad que hemos elegido es Córdoba.</p>
            <h2 className="about-title">¿Cómo surgió esta idea?</h2>
            <p className="about-text">*Nombre de la app* nos pareció una herramienta muy útil para todo aquel
                que quiera visitar una nueva ciudad y quiera tener su día organizado.
                Como uno de nuestros miembros es de Córdoba, decidimos centrarnos en
                este destino.</p>
            <h2 className="about-title">¿Qué tecnologías hemos usado?</h2>
            <p className="about-text">Esta aplicación está desarrollada con NodeJS y ReactJS. También hemos
                usado Styled Components, Framer Motion y Bootstrap.</p>
            <h2 className="about-title">¿Quieres seguir nuestros proyectos?</h2>
            <p className="about-text">Síguenos en nuestras redes:</p>
            <ul className="rrss-container">
                <li className="rrss-card">                   
                    <h3 className="rrss-name">Ana Paula</h3>
                    <div className="rrss-icons">
                        <a className="rrss-item" href="https://www.linkedin.com/in/ana-paula-morales-dulzaides-813645218/"><img src="https://cdn.iconscout.com/icon/free/png-256/linkedin-182-675325.png" alt="" /></a>
                        <a className="rrss-item" href="https://github.com/anapaulacello"><img src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png" alt="" /></a>
                    </div>
                        
                </li>
                <li className="rrss-card">   
                    <h3 className="rrss-name"> Gisela</h3>
                    <div className="rrss-icons">
                        <a className="rrss-item" href="https://www.linkedin.com/in/gisela-claure/"><img src="https://cdn.iconscout.com/icon/free/png-256/linkedin-182-675325.png" alt="" /></a>
                        <a className="rrss-item" href="https://github.com/GiselaClaure"><img src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png" alt="" /></a>
                    </div>
                        
                </li>
                <li className="rrss-card">
                    <h3 className="rrss-name">Maestre</h3>
                    <div className="rrss-icons">
                        <a className="rrss-item" href="https://www.linkedin.com/in/antonio-maestre-vargas-648242227/"><img src="https://cdn.iconscout.com/icon/free/png-256/linkedin-182-675325.png" alt="" /></a>
                        <a className="rrss-item" href="https://github.com/19941056"><img src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png" alt="" /></a>
                    </div>
                        
                </li>
                <li className="rrss-card">
                    <h3 className="rrss-name">Steve</h3>
                    <div className="rrss-icons">
                    <a className="rrss-item" href="https://www.linkedin.com/in/kumpevela/"><img src="https://cdn.iconscout.com/icon/free/png-256/linkedin-182-675325.png" alt="" /></a>
                        <a className="rrss-item" href="https://github.com/kumpevela"><img src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png" alt="" /></a>
                    </div>
                        

                </li>
                <li className="rrss-card">
                    <h3 className="rrss-name">Juan</h3>
                    <div className="rrss-icons">
                    <a className="rrss-item" href="https://www.linkedin.com/in/juan-alejandro-huertas-alzate-5a2421225/"><img src="https://cdn.iconscout.com/icon/free/png-256/linkedin-182-675325.png" alt="" /></a>
                    <a className="rrss-item" href="https://github.com/juan1497"><img src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png" alt="" /></a>
                    </div>
                        

                </li>
            </ul>
            </div>
            
        </div>
    );
}

export default About;
