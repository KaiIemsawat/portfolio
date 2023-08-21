import React from "react";
import { TypeAnimation } from "react-type-animation";
import IconSquareGithub from "../assets/icons/GitHubIcon";
import IconLinkedin from "../assets/icons/LinkedInIcon";

const Main = () => {
    let background = () => {
        let res = "";
        let number = Math.ceil(Math.random() * 5);
        switch (number) {
            case 1:
                res =
                    "https://scontent-iad3-1.xx.fbcdn.net/v/t31.18172-8/11850654_167372260264359_6033841003877855885_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=6R5Jh5Tahz0AX-86xx5&_nc_ht=scontent-iad3-1.xx&oh=00_AfDdxAGgxMUdeHXvy2rLGUq7MOISFVwCcXtIjvBBeInrdQ&oe=650B4259";
                break;
            case 2:
                res =
                    "https://scontent-iad3-2.xx.fbcdn.net/v/t31.18172-8/11935571_168756906792561_5874723257473553058_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=jNAaxo7KHhwAX_cqH_G&_nc_ht=scontent-iad3-2.xx&oh=00_AfCOhzIVAGLCUzRyaL3RZ3ZU8R27rF7DA9ZdMGJEQrZI-Q&oe=650B1364";
                break;
            case 3:
                res =
                    "https://scontent-iad3-1.xx.fbcdn.net/v/t31.18172-8/11882344_167372146931037_4278858618040354107_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=xT7JXL9aFMcAX_AUp8Y&_nc_ht=scontent-iad3-1.xx&oh=00_AfDH0VCQ_kB1RGsf2fVLXzNM5SaKm3APVr4n1JmgRb2HqQ&oe=650B264E";
                break;
            case 4:
                res =
                    "https://scontent-iad3-2.xx.fbcdn.net/v/t31.18172-8/11953403_167372206931031_5206379718578442125_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=Dtg5Tybh4A8AX_W7gO8&_nc_ht=scontent-iad3-2.xx&oh=00_AfCqdqr5u6K3NQjv81fvTX7_HQxxrAV0TpdvxXYU0-bwRA&oe=650B2272";
                break;
            case 5:
                res =
                    "https://scontent-iad3-1.xx.fbcdn.net/v/t31.18172-8/11953313_167372866930965_169693247021276797_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=uXlCn68JdzkAX_tMmID&_nc_ht=scontent-iad3-1.xx&oh=00_AfDUfbUKgMo-YwrwdY46elJNqekc7yY7alKwIz3W1jesHw&oe=650B1F1F";
                break;
            default:
                console.log("There must be some issue");
        }
        return res;
    };

    return (
        <div id="main">
            <img
                className="w-full h-screen object-cover object-right-top"
                src={background()}
                alt=""
            />
            <div className="w-full h-screen absolute top-0 left-0 bg-fuchsia-500/10">
                <div className="max-w-[700px] m-auto h-screen w-full flex flex-col justify-center items-center">
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
                                "software development engineer in test",
                                2000,
                                "problem solver",
                                2000,
                                "team player",
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
