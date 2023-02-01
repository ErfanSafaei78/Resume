//style
import "./style/style.Field.css";
//components
import { TimeLine } from "./components/TimeLine";

export function Field(props) {
    const timeLineTags = (Data) => {
        const tags = [];
        for(let i = 1; i < Data.length; i++) {
            const timeLineData = Data[i];
            tags.push (
                <TimeLine Data={timeLineData} />
            )
        }
        return tags;
    }
    return (
        <div className="col-lg-6">
            <h2 className="subtitle">{props.Data[0]}</h2>
            <ul className="time-line">
                {timeLineTags(props.Data).map((tag) => {return tag})}
            </ul>
        </div>
    )
}