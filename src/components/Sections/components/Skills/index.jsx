//Hooks
import { useContext } from "react";
//style
import "./style/style.Skills.css";
//Context
import { dataContext } from "../../../../context/data.context";

export function Skills () {
    const data = useContext(dataContext).content.sections.skills;
    return (
        <section className="intro-section">
            <h2 className="section-title">Skills</h2>
            <div className="skills">
                {data.map((skill) => {
                    return (
                        <span className="skill">{skill}</span>
                    )
                })}
            </div>
        </section>
    )
}