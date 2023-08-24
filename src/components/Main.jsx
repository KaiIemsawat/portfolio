import React from "react";
import { TypeAnimation } from "react-type-animation";
import IconSquareGithub from "../assets/icons/GitHubIcon";
import IconLinkedin from "../assets/icons/LinkedInIcon";
import background1 from "../assets/images/background1.jpg";

const Main = () => {
    return (
        <div id="main">
            <img
                className="w-full h-screen object-cover object-right-top"
                src={background1}
                alt="backgroundImg"
            />
            <div className="w-full h-screen absolute top-0 left-0 bg-fuchsia-500/10">
                <div className="max-w-[700px] m-auto h-screen w-full flex flex-col justify-center items-center">
                    <h1 className="text-cus-gray/70 sm:text-5xl text-4xl">
                        I'm Kai Iemsawat
                    </h1>
                    <h2 className="text-cus-gray/70 flex sm:text-3xl text-2xl pt-4">
                        I'm
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                " a... full stack developer",
                                2000, // wait 2s before replacing "Mice" with "Hamsters"
                                " an... SDET",
                                2000,
                                " a... problem solver",
                                2000,
                                " a... team player",
                                2000,
                                " a... tech enthusiast",
                                2000,
                                " a... photographer",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{
                                fontSize: "1em",
                                display: "inline-block",
                                paddingLeft: "5px",
                            }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className="flex justify-between pt-2 max-w-[64px] w-full">
                        <a
                            href="https://github.com/KaiIemsawat"
                            target="_blank"
                        >
                            <IconSquareGithub className="text-xl text-cus-gray/70 cursor-pointer" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kaiiemsawat/"
                            target="_blank"
                        >
                            <IconLinkedin className="text-xl text-cus-gray/70 cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
