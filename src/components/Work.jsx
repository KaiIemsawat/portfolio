import React from "react";
import { data } from "autoprefixer";
import WorkItem from "./subcomponents/WorkItem";

const workData = [
    {
        year: 2022,
        title: "Test Engineer",
        duration: "1 year",
        details:
            "I am an experienced Full Stack Software Engineer and Software Development Engineer in Testing with a thirst for knowledge and a commitment to delivering cutting-edge solutions. I am eager to contribute my skills and passion to your esteemed organization's success.",
    },
    {
        year: 2022,
        title: "Test Engineer",
        duration: "1 year",
        details:
            "I am an experienced Full Stack Software Engineer and Software Development Engineer in Testing with a thirst for knowledge and a commitment to delivering cutting-edge solutions. I am eager to contribute my skills and passion to your esteemed organization's success.",
    },
    {
        year: 2022,
        title: "Test Engineer",
        duration: "1 year",
        details:
            "I am an experienced Full Stack Software Engineer and Software Development Engineer in Testing with a thirst for knowledge and a commitment to delivering cutting-edge solutions. I am eager to contribute my skills and passion to your esteemed organization's success.",
    },
];
const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#02284f] pb-8">
                Work
            </h1>
            {workData.map((eaWork, idx) => (
                <WorkItem
                    key={idx}
                    year={eaWork.year}
                    title={eaWork.title}
                    duration={eaWork.duration}
                    details={eaWork.details}
                />
            ))}
        </div>
    );
};

export default Work;
