import React from "react";

const WorkItem = ({ year, title, location, details }) => {
    return (
        // <ol className="flex flex-col md:flex-row relative border-l border-slate-200">
        <ol className="flex flex-col md:flex-row relative ">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-slate-200 rounded-full mt-1.5 -left-1.5 border-white" />
                <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-cus-gray bg-[#02284f88] rounded-md">
                        {year}
                    </span>
                    <span className="text-lg font-semibold text-[#02284f] ">
                        {title}
                    </span>
                    <span className="my-1 text-lg leading-none text-slate-400">
                        {location}
                    </span>
                </div>
                <div className="my-2 text-base font-normal text-slate-500">
                    {details}
                </div>
            </li>
        </ol>
    );
};

export default WorkItem;
