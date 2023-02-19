//components
import {SideBar} from "./components/SideBar";
import {Sections} from "./components/Sections";
//style
import "./App.style.css";
//constants
import { data } from "./constatns/data";
//Contexts
import { dataContext } from "./context/data.context";

export function App() {
    return (
        <dataContext.Provider value={data} >
            <div className="content-wrapper">
                <SideBar />
                <Sections />
            </div>
        </dataContext.Provider> 
    )
}