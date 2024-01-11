import { useState } from "react";

import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import AboutMe from "./components/aboutMe";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Sidenav />
            <Main />
            <AboutMe />
            <Work />
            <Projects />
            {/* <Resume /> */}
            <Contact />
        </div>
    );
}

export default App;
