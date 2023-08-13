import React from "react";

const AboutMe = () => {
    return (
        <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#02284f] pb-8">
                About Me
            </h1>
            {/* <h2 className="text-slate-600 font-bold">Experience</h2> */}
            <p className="my-2 text-base font-normal text-slate-500">
                I am an enthusiastic individual with a passion for continuous
                growth and learning. Currently employed as a Data Test Engineer
                at Pluto TV, I have demonstrated my dedication to the field of
                technology. My insatiable thirst for knowledge led me to embark
                on a transformative journey where I attended a coding bootcamp
                at Coding Dojo, eager to expand my skill set. Through dedication
                and hard work, I successfully transitioned into a Full Stack
                Software Developer role. This transition is a testament to my
                relentless pursuit of excellence and my commitment to mastering
                every facet of software development. My unique blend of testing
                expertise and coding proficiency equips me with a well-rounded
                understanding of the software development lifecycle. I am
                excited to embrace this next chapter, armed with a diverse skill
                set that enables me to contribute innovatively and effectively
                to the world of software development.
            </p>
        </div>
    );
};

export default AboutMe;
