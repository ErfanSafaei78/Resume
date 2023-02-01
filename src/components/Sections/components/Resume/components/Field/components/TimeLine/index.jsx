//style
import "./style/style.TimeLine.css";

export function TimeLine(props) {
    return (
        <li className="time-line-item">
            <span className="badge badge-primary">{`${props.Data.fromYear} - ${props.Data.toYear}`}</span>
            <h6 className="time-line-item-title">{props.Data.title}</h6>
            <p className="time-line-item-subtitle">{props.Data.institution || props.Data.companyName}</p>
            <p className="time-line-item-content">{props.Data.description}</p>
        </li>
    )
}