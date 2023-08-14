import React from "react";

const ProjectItem = ({ img, title, tools, link, description }) => {
    return (
        <div className="relative flex  bg-cus-gray items-center justify-center h-auto w-full shadow-xl shadow-slate-400 rounded-xl group hover:bg-gradient-to-r from-slate-400 to-[#02284f] ease-in duration-300">
            <img
                src={img}
                alt="/"
                className="rounded-xl h-max w-max object-cover group-hover:opacity-10 ease-in duration-300"
            />
            <div className="hidden grow-0 group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in duration-300">
                <h3 className="text-2xl font-bold text-cus-gray tracking-wider text-center">
                    {title}
                </h3>
                <p className="text-cus-gray text-center">{tools}</p>
                <a href={link} target="_blank">
                    <p className="text-center p-3 rounded-lg bg-cus-gray text-slate-700/50 font-bold cursor-pointer text-lg my-2">
                        See Application
                    </p>
                </a>
                <p className="text-cus-gray text-center text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ProjectItem;
