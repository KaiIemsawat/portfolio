import React from "react";
import { TypeAnimation } from "react-type-animation";
import IconFacebook from "../assets/icons/FacebookIcon";
import IconLinkedin from "../assets/icons/LinkedInIcon";
import IconSquareGithub from "../assets/icons/GitHubIcon";
import IconInstagram from "../assets/icons/InstagramIcon";

const Main = () => {
    let background = () => {
        let res = "";
        let number = Math.ceil(Math.random() * 5);
        switch (number) {
            case 1:
                res =
                    "https://scontent-iad3-1.xx.fbcdn.net/v/t31.18172-8/11953313_167372866930965_169693247021276797_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=WHhIIKOwU9oAX9SpVW6&_nc_ht=scontent-iad3-1.xx&oh=00_AfAo3JYKwK3RWLZODvWL0jP4h6n9NmNd5FX0Z3_qMxCK1Q&oe=64E00E1F";
                break;
            case 2:
                res =
                    "https://scontent-iad3-2.xx.fbcdn.net/v/t31.18172-8/11953403_167372206931031_5206379718578442125_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=CZoLv_VWLTgAX8J5wQ4&_nc_ht=scontent-iad3-2.xx&oh=00_AfBbo4BYWmWEyJoW5QbAnChjsKoBJTBMDxZjOIZPBZ11tQ&oe=64E162F2";
                break;
            case 3:
                res =
                    "https://scontent-iad3-1.xx.fbcdn.net/v/t31.18172-8/11882344_167372146931037_4278858618040354107_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=xLWwXdJXsmQAX9vu_Uk&_nc_ht=scontent-iad3-1.xx&oh=00_AfBOiF-goBtzb6HKGDXph13FHqEuF-7W8fQwWhO6bOXCsw&oe=64E166CE";
                break;
            case 4:
                res =
                    "https://scontent-iad3-1.xx.fbcdn.net/v/t31.18172-8/11953507_167371966931055_7652312498520072164_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=9QugIwnh3DIAX-KyRuq&_nc_ht=scontent-iad3-1.xx&oh=00_AfCVzaACSY0Cy_uE6CgYJyvHc-tLeB5kXcRb0GEtdU3WtA&oe=64E16FFE";
                break;
            case 5:
                res =
                    "https://scontent-iad3-2.xx.fbcdn.net/v/t31.18172-8/11935571_168756906792561_5874723257473553058_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=7mUC7rGVBfMAX88KbU8&_nc_ht=scontent-iad3-2.xx&oh=00_AfAtVpzYIfPyuP8b795-zVtYgZvNPm50GpSyA0meH35IDg&oe=64E153E4";
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
