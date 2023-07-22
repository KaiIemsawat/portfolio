import React, { useState } from "react";
import IconMenuCheese from "../assets/icons/IconMenuCheese";
import IconHome from "../assets/icons/IconHome";
import IconBxGitBranch from "../assets/icons/IconBxGitBranch";
import IconDocumentText from "../assets/icons/IconDoc";
import IconProject from "../assets/icons/IconProject16";
import IconContacts from "../assets/icons/IconContact";

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        console.log("state change");
    };
    return (
        <div>
            <a
                onClick={handleNav}
                className="fixed top-4 right-4 z-[98] cursor-pointer md:hidden ">
                <IconMenuCheese className=" md:hidden text-xl text-cus-gray/70" />
            </a>
            {nav ? (
                <div className="fixed md:hidden w-full h-screen  flex flex-col justify-center items-center z-20">
                    <a
                        href="#main"
                        onClick={handleNav}
                        className="w-[75%] flex justify-center items-center rounded-full  bg-cus-gray/30  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <IconHome className="text-xl" />
                        <span className="pl-4">Home</span>
                    </a>
                    <a
                        href="#work"
                        onClick={handleNav}
                        className="w-[75%] flex justify-center items-center rounded-full  bg-cus-gray/30  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <IconBxGitBranch className="text-xl" />
                        <span className="pl-4">Works</span>
                    </a>
                    <a
                        href="#projects"
                        onClick={handleNav}
                        className="w-[75%] flex justify-center items-center rounded-full  bg-cus-gray/30  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <IconProject className="text-xl" />
                        <span className="pl-4">Projects</span>
                    </a>
                    <a
                        href="#resume"
                        onClick={handleNav}
                        className="w-[75%] flex justify-center items-center rounded-full  bg-cus-gray/30  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <IconDocumentText className="text-xl" />
                        <span className="pl-4">Resume</span>
                    </a>
                    <a
                        href="#contact"
                        onClick={handleNav}
                        className="w-[75%] flex justify-center items-center rounded-full  bg-cus-gray/30  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <IconContacts className="text-xl" />
                        <span className="pl-4">Contact</span>
                    </a>
                </div>
            ) : (
                ""
            )}

            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    <a
                        href="#main"
                        className="rounded-full bg-cus-gray/50  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:shadow-xl hover:shadow-slate-400/20">
                        <IconHome className="text-xl" />
                    </a>
                    <a
                        href="#work"
                        className="rounded-full bg-cus-gray/50  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:shadow-xl hover:shadow-slate-400/20">
                        <IconBxGitBranch className="text-xl" />
                    </a>
                    <a
                        href="#projects"
                        className="rounded-full bg-cus-gray/50  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:shadow-xl hover:shadow-slate-400/20">
                        <IconProject className="text-xl" />
                    </a>
                    <a
                        href="#resume"
                        className="rounded-full bg-cus-gray/50  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:shadow-xl hover:shadow-slate-400/20">
                        <IconDocumentText className="text-xl" />
                    </a>
                    <a
                        href="#contact"
                        className="rounded-full bg-cus-gray/50  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:shadow-xl hover:shadow-slate-400/20">
                        <IconContacts className="text-xl" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidenav;
