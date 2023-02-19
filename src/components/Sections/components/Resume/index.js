//Hooks
import { useContext } from "react"
//style
import "./style/style.Resume.css"
//components
import { Field } from "./components/Field"
//Context
import { dataContext } from "../../../../context/data.context"

export function Resume() {
    const data = useContext(dataContext).content.sections.resume;
    return (
        <section className="resume-section">
            <h2 className="section-title">RESUME</h2>
            <div className="row">
                <Field Data={data.education}/>
                <Field Data={data.experience}/>
            </div>
        </section>
    )
}