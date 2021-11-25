import React from "react";
function About() {
    return (
        <div>
            About
            <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Casa%20pepe%20de%20la%20Juder%C3%ADa&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
            ></iframe>
        </div>
    );
}

export default About;
