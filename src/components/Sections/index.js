//style
import "./style/style.Sections.css";
//components
import {AboutMe} from "./components/AboutMe";
import {Resume} from "./components/Resume";
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";

export function Sections(props) {
    return (
        <main>
            <AboutMe />
            <Resume />
            <Skills />
            <Projects /> 
        </main>
    )
}