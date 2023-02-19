//Hooks
import { useContext } from "react";
//style
import "./style/style.Projects.css";
//components
import { Project } from "./components/Project";
//Context
import { dataContext } from "../../../../context/data.context";

export function Projects() {
    const data = useContext(dataContext).content.sections.projects;
    const projectTags = (Data) => {
        const tags = [];
        for(let i = 1; i < Data.length; i++) {
            const projectData = Data[i];
            tags.push (
                <Project images={Data[0]} projectData={projectData} projectNumber={i}/>
            )
        }
        return tags;
    }
    return (
        <section className="projects-section">
            <h2 className="section-title">PROJECTS</h2>
            <div className="projects-wrapper">
                {projectTags(data).map(tag => {return tag})}
            </div>

        </section>
    )
}