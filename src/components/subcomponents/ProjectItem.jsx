import React from "react";

const ProjectItem = ({ img, title, tools, link, description }) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-slate-400 rounded-xl group hover:bg-gradient-to-r from-slate-200 to-[#02284f]">
            <img
                src={img}
                alt="/"
                className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl font-bold text-cus-gray tracking-wider text-center">
                    {title}
                </h3>
                <p className="text-cus-gray text-center">{tools}</p>
                <a href={link} target="_blank">
                    <p className="text-center p-3 rounded-lg bg-cus-gray text-slate-700/50 font-bold cursor-pointer text-lg">
                        more info
                    </p>
                </a>
                <p className="text-cus-gray text-center">{description}</p>
            </div>
        </div>
    );
};

export default ProjectItem;
