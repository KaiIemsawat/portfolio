import React from "react";
import { data } from "autoprefixer";
import WorkItem from "./subcomponents/WorkItem";

const plutoDetails = (
    <ul>
        <li>
            <span className="text-2xl">&#8226; </span>
            Collaborate with cross-functional teams to analyze requirements and
            design test cases to ensure the quality of new and existing
            features.
        </li>
        <li>
            <span className="text-2xl">&#8226; </span>Maintain and enhance test
            automation frameworks using Java, Selenium, TestNG, and SQL,
            increasing testing efficiency.
        </li>
        <li>
            <span className="text-2xl">&#8226; </span>Develop UI automation
            frameworks to validate expected behavior across multiple TV
            platforms.
        </li>
        <li>
            <span className="text-2xl">&#8226; </span>Conduct both manual and
            automated testing across various platforms, supporting the CI/CD
            pipeline through tools like Jenkins and TestRail.
        </li>
        <li>
            <span className="text-2xl">&#8226; </span>Proactively learn and
            integrate new tools and methodologies, driving improvements in
            testing practices and product quality.
        </li>
        <li>
            <span className="text-2xl">&#8226; </span>Investigate issues
            alongside software engineers and propose solutions to prevent
            regressions.
        </li>
        <li>
            <span className="text-2xl">&#8226; </span>Validate and ensure that
            the fixed version of the application would not affect the other
            areas that already work properly.
        </li>
        <li>
            <span className="text-2xl">&#8226; </span>Daily monitor number of
            application usage from different platforms across the globe. Report
            to team leads if there is any abnormality.
        </li>
        <li>
            <span className="text-2xl">&#8226; </span>Participate in Agile
            ceremonies, contributing to continuous improvement within an SAFe
            Agile environment.
        </li>
    </ul>
);

const mgmDetails = (
    <ul>
        <li>
            <span className="text-2xl">&#8226; </span>Provided exceptional
            customer service in high-pressure environments, consistently
            exceeding patrons’ expectations.
        </li>
        <li>
            <span className="text-2xl">&#8226; </span>Demonstrated accuracy in
            calculations handled high-value chips and cash transactions under
            time-limited situations in various games.
        </li>

        <li>
            <span className="text-2xl">&#8226; </span>Effectively coordinated
            with co-workers and supervisors in fast-paced games such as Dice.
        </li>
        <li>
            <span className="text-2xl">&#8226; </span>Maintained keen
            observation of player behavior to detect any potential fraudulent
            activities.
        </li>
        <li>
            <span className="text-2xl">&#8226; </span>Mentored and supported new
            dealers, assisting them in skill development and providing
            additional practice opportunities.
        </li>
    </ul>
);

const workData = [
    {
        year: "Feb 2022 - current",
        title: "Data Test Engineer",
        location: "PlutoTV",
        details: plutoDetails,
    },
    // {
    //     year: "Apr 2017 - Feb 2022",
    //     title: "Table Game Dealer",
    //     location: "MGM National Harbor",
    //     details: mgmDetails,
    // },
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
                    location={eaWork.location}
                    details={eaWork.details}
                />
            ))}
        </div>
    );
};

export default Work;
