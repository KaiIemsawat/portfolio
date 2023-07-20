import React from "react";
import { TypeAnimation } from "react-type-animation";
import IconFacebook from "../assets/icons/FacebookIcon";
import IconLinkedin from "../assets/icons/LinkedInIcon";
import IconSquareGithub from "../assets/icons/GitHubIcon";
import IconInstagram from "../assets/icons/InstagramIcon";

const Main = () => {
    return (
        <div id="main">
            <img
                className="w-full h-screen object-cover object-right-top"
                src="https://scontent-iad3-1.xx.fbcdn.net/v/t31.18172-8/11953313_167372866930965_169693247021276797_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=WHhIIKOwU9oAX9SpVW6&_nc_ht=scontent-iad3-1.xx&oh=00_AfAo3JYKwK3RWLZODvWL0jP4h6n9NmNd5FX0Z3_qMxCK1Q&oe=64E00E1F"
                alt=""
            />
            <div className="w-full h-screen absolute top-0 left-0 bg-fuchsia-500/10">
                <div className="max-w-[700px] m-auto h-screen w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="text-cus-gray/70 sm:text-5xl text-4xl">
                        I'm Kai Iemsawat
                    </h1>
                    <h2 className="text-cus-gray/70 flex sm:text-3xl text-2xl pt-4">
                        I'm a...
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "full stack developer",
                                2000, // wait 2s before replacing "Mice" with "Hamsters"
                                "software development in test",
                                2000,
                                "problem solver",
                                2000,
                                "tech enthusiast",
                                2000,
                                "photographer",
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
                    <div className="flex justify-between pt-2 max-w-[180px] w-full">
                        <IconSquareGithub className="text-xl text-cus-gray/70 cursor-pointer" />
                        <IconLinkedin className="text-xl text-cus-gray/70 cursor-pointer" />
                        <IconFacebook className="text-xl text-cus-gray/70 cursor-pointer" />
                        <IconInstagram className="text-xl text-cus-gray/70 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
