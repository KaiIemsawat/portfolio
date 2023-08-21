import React from "react";
import ProjectItem from "./subcomponents/ProjectItem";
import plutoImg from "../assets/images/plutoScreen.png";
import calculatorImg from "../assets/images/calculator.png";
import notesImg from "../assets/images/notes.png";
import portfolioImg from "../assets/images/portfolio.png";
import trailssImg from "../assets/images/trailss.png";
import recipeRoomImg from "../assets/images/recipeRoom.png";
import marketplaceImg from "../assets/images/marketplace.png";

const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#02284f]">
                Projects
            </h1>
            <p className="text-center py-8 my-2 text-base font-normal text-slate-500">
                "I have been passionately engaged in a dynamic blend of personal
                and real-life projects, honing my skills across a spectrum of
                programming languages. My proficiency spans from Java's robust
                versatility to the interactive web-oriented realms of JavaScript
                and TypeScript. In the realm of web development, I've embraced
                the MERN (MongoDB, Express.js, React, Node.js) stack as a
                cornerstone, channeling its power to craft innovative and
                user-centric applications. I seamlessly integrate the aesthetics
                of both Tailwind CSS and Bootstrap CSS, infusing modern and
                responsive designs into my personal projects. For data
                management, I adeptly traverse two paradigms: NoSQL databases,
                which I elegantly incorporate into my personal undertakings, and
                SQL databases, which I apply within my professional pursuits. As
                a data test engineer, I proficiently utilize Jenkins in my job,
                streamlining the development process and ensuring efficient
                integration and deployment. Through this diverse toolkit, I
                weave creativity and functionality into every project I
                undertake."
            </p>
            <div className="grid lg:grid-cols-2 gap-12">
                <ProjectItem
                    img={plutoImg}
                    title="Pluto TV"
                    tools="SQL, TestRail, Jenkins, Manual Testing, Automation"
                    link="https://pluto.tv/en/live-tv/5efbd39f8c4ce900075d7698?utm_source=google&utm_medium=paidsearch&utm_campaign=12080790684&utm_term=pluto+tv&utm_creative=617765758688&device=c&campaign=Search_Brand_Desktop_E&gclid=CjwKCAjw_uGmBhBREiwAeOfsd2DdmXYfP2rGN_oFBRvuMhsW1soJbYXnyKB_i3YApG0DvfRZ_UEpiBoCeagQAvD_BwE"
                    description="I am currently work here as a data test engineer. Ensuring that we are able to collect all of the data from each session accurately"
                />
                <ProjectItem
                    img={portfolioImg}
                    title="portfolio"
                    tools="JS, react, TailwindCSS"
                    link="https://kai-portfolio.tech/"
                    description="This is a personal portfolio project that contains links to my other works, my sumary, and visitors may contact me. This project is deployed on https://www.hostinger.com/"
                />
                <ProjectItem
                    img={calculatorImg}
                    title="Calculator"
                    tools="JS, React"
                    link="http://3.95.202.50/"
                    description="Created with react and css. This application was deployed on AWS EC2"
                />
                <ProjectItem
                    img={trailssImg}
                    title="Tra!ls App"
                    tools="MERN, TailwindCSS"
                    link="http://54.174.238.243/"
                    description="Full stack MERN with JS. Styled with TailwindCSS. This application was deployed on AWS EC2"
                />
                <ProjectItem
                    img={notesImg}
                    title="notes app"
                    tools="TS, MERN, Bootstrap"
                    link="http://54.89.66.246/"
                    description="This is an individual project using TS with Mern and styled with Bootstrap. This application was deployed on AWS EC2"
                />
                <ProjectItem
                    img={recipeRoomImg}
                    title="Blog App"
                    tools="JS, MERN"
                    link="http://44.204.56.114/"
                    description="This is a full stack MERN. It is styled with plain CSS. This application was deployed on AWS EC2"
                />
                <ProjectItem
                    img={marketplaceImg}
                    title="e-commerce app"
                    tools="TypeScript, NextJS, MongoDB"
                    link="https://nextjs-ts-ecommerce-kaiiemsawat.vercel.app/"
                    description="This application allows user to browse and seearch for the items they would like to see. Deployed on Vercel"
                />
            </div>
        </div>
    );
};

export default Projects;
