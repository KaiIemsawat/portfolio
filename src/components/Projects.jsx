import React from "react";
import ProjectItem from "./subcomponents/ProjectItem";
import trailssImg from "../assets/images/trailssScreen.png";
import plutoImg from "../assets/images/plutoScreen.png";
import calculatorImg from "../assets/images/calculator.png";
import notesImg from "../assets/images/notes.png";

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
                <ProjectItem
                    img={trailssImg}
                    title="Tra!ls App"
                    tools="MERN"
                    link="http://54.174.238.243/"
                    description="Full stack MERN with JS. Styling on TailwindCSS and deployed on AWS EC2"
                />

                <ProjectItem
                    img={calculatorImg}
                    title="Calculator"
                    tools="JS, React"
                    link="http://3.95.202.50/"
                    description="Created with react and css "
                />
                <ProjectItem
                    img={notesImg}
                    title="notes app"
                    tools="TS, MERN"
                    link="http://54.89.66.246/"
                    description="This is an individual project using TS with Mern and
                    deployed on AWS EC2"
                />
                <ProjectItem
                    img={plutoImg}
                    title="Pluto TV"
                    tools="SQL, TestRail, Jenkins, Manual Testing, Automation"
                    link="https://pluto.tv/en/live-tv/5efbd39f8c4ce900075d7698?utm_source=google&utm_medium=paidsearch&utm_campaign=12080790684&utm_term=pluto+tv&utm_creative=617765758688&device=c&campaign=Search_Brand_Desktop_E&gclid=CjwKCAjw_uGmBhBREiwAeOfsd2DdmXYfP2rGN_oFBRvuMhsW1soJbYXnyKB_i3YApG0DvfRZ_UEpiBoCeagQAvD_BwE"
                    description="I am currently work here as data test engineer. Ensuring that we are able to collect all of the data from each session accurately"
                />
            </div>
        </div>
    );
};

export default Projects;
