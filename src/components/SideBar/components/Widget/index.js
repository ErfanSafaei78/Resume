//style
import "./style/style.Widget.css";

export function Widget(props) {
    return (
        <div className="widget card">
            <div className="card-body">
                <div className="widget-content">
                    <h5 className="widget-title card-title">{props.data.title}</h5>
                    {props.data.items.map((item) => {
                        return ( <p>{item}</p>)
                    })}
                </div>
            </div>
        </div>
    )
}