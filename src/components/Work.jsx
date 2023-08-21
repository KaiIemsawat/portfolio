import React from "react";
import { data } from "autoprefixer";
import WorkItem from "./subcomponents/WorkItem";

const plutoDetails = (
    <ul>
        <li>
            <span className="text-2xl">&#8226; </span>
            Analyze business requirement documents to discuss with the team in
            meetings and create test cases to validate new features accordingly.
        </li>
        <li>
            <span className="text-2xl">&#8226; </span>Maintain existing
            frameworks using Java, Selenium, TestNG and SQL to ensure efficiency
            with both new and existing features.
        </li>
        <li>
            <span className="text-2xl">&#8226; </span>Use Jenkins and TestRail
            as part of the CI/CD environment.
        </li>
        <li>
            <span className="text-2xl">&#8226; </span>Perform automation and
            manual testing in various platforms and regions.
        </li>
        <li>
            <span className="text-2xl">&#8226; </span>Working in a scrum team
            and SAFe Agile environment. Also collaborate between teams if
            needed.
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
    {
        year: "Apr 2017 - Feb 2022",
        title: "Table Game Dealer",
        location: "MGM National Harbor",
        details: mgmDetails,
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
                    location={eaWork.location}
                    details={eaWork.details}
                />
            ))}
        </div>
    );
};

export default Work;
