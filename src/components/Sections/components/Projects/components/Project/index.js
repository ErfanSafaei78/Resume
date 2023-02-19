//style
import "./style/style.Project.css";

export function Project(props) {
    const projectItemLinkStyle = {
        backgroundImage: `url(${props.images[props.projectData.image]})`,
    }
    return (
        <figure className="projects-item">
            <a href={props.projectData.link} className="projects-item-link" style={projectItemLinkStyle}>
                <div className="projects-item-details">
                    <h5 className="projects-item-title">{props.projectData.title}</h5>
                    <p className="projects-item-description">{props.projectData.description}</p>
                </div>
            </a>
        </figure>
    )
}