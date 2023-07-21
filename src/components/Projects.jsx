import React from "react";
import ProjectItem from "./subcomponents/ProjectItem";
import trailssImg from "../assets/images/trailssScreen.png";
import plutoImg from "../assets/images/plutoScreen.png";

const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#02284f]">
                Project
            </h1>
            <p className="text-center py-8">
                Aliquam auctor, urna sed ullamcorper rhoncus, arcu felis mollis
                elit, a mollis massa sem ut ligula. Sed egestas dignissim eros
                sit amet consequat. Nulla porttitor diam viverra, tempus libero
                ut, auctor tortor. Sed nisl orci, venenatis condimentum tortor
                feugiat, eleifend volutpat ligula. Aenean sapien metus, semper
                vel luctus vel, scelerisque sit amet orci. Mauris a mauris
                sapien. Suspendisse ultricies rutrum felis nec lobortis.
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={trailssImg} title="Tra!ls App" />
                <ProjectItem img={plutoImg} title="Pluto TV" />
            </div>
        </div>
    );
};

export default Projects;
