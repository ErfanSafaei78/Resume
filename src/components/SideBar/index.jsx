//Hooks
import { useContext } from "react";
//style
import "./style/style.SideBar.css"
//components
import {Profile} from "./components/Profile";
import {Widget} from "./components/Widget";
//Context
import { dataContext } from "../../context/data.context";

export function SideBar() {
    const data = useContext(dataContext).content.sideBar;
    return (
        <aside>
            <Profile />
            {data.widgets.map((widget) => {
                return (
                    <Widget data={widget} />
                )
            })}
        </aside>
    )
}