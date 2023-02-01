//Hooks
import { useContext } from "react";
//Context
import { dataContext } from "../../../../context/data.context";
//style
import "./style/style.AboutMe.css";

export function AboutMe() {
    const data = useContext(dataContext).content.sections.aboutMe;
    return (
        <section className="intro-section">
            <h2 className="section-title">About Me</h2>
            <p>{data}</p>
        </section>
    )
}